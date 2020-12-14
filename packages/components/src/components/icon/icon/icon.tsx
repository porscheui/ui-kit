import { Build, Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { buildIconUrl, DEFAULT_ICON_NAME, getSvgContent } from './iconUtlis';
import { prefix } from '../../../utils';
import { Theme, IconName, TextColor } from '../../../types';

@Component({
  tag: 'p-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  @Element() public el!: HTMLElement;

  /** Specifies which icon to use. */
  @Prop() public name?: IconName = DEFAULT_ICON_NAME;

  /** Specifies a whole icon path which can be used for custom icons. */
  @Prop() public source?: string;

  /** @internal Specifies which icon variant to use. */
  @Prop() public variant?: 'outline' | 'filled' = 'outline';

  /** Basic color variations depending on theme property. */
  @Prop() public color?: TextColor = 'default';

  /** The size of the icon. */
  @Prop() public size?: 'small' | 'medium' | 'large' | 'inherit' = 'small';

  /** If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`. */
  @Prop() public lazy?: boolean = false;

  /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
  @Prop() public theme?: Theme = 'light';

  @State() private svgContent?: string;

  private isVisible: boolean = false;
  private io?: IntersectionObserver;

  @Watch('source')
  @Watch('name')
  public loadIcon() {
    if (Build.isBrowser && this.isVisible) {
      this.svgContent = undefined; // reset svg content while new icon is loaded
      const url = buildIconUrl(this.source ?? this.name);
      getSvgContent(url).then((iconContent) => {
        // check if response matches current icon source
        if (url === buildIconUrl(this.source ?? this.name)) {
          this.svgContent = iconContent;
        }
      });
    }
  }

  public componentWillLoad(): void {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, '50px', () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }

  public componentShouldUpdate(_newValue, _oldValue, propOrStateName: string): boolean {
    return propOrStateName !== 'name';
  }

  public disconnectedCallback(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  public render(): JSX.Element {
    const iconClasses = {
      [prefix('icon')]: true,
      [prefix(`icon--size-${this.size}`)]: true,
      [prefix(`icon--color-${this.color}`)]: true,
      [prefix(`icon--theme-${this.theme}`)]: this.color !== 'inherit',
    };

    return (
      <Host>
        <i class={iconClasses} innerHTML={this.svgContent} />
      </Host>
    );
  }

  private waitUntilVisible(el: HTMLElement, rootMargin: string, cb: () => void): void {
    if (Build.isBrowser && this.lazy && typeof window !== 'undefined' && (window as any).IntersectionObserver) {
      const io = (this.io = new (window as any).IntersectionObserver(
        (data: IntersectionObserverEntry[]) => {
          if (data[0].isIntersecting) {
            io.disconnect();
            this.io = undefined;
            cb();
          }
        },
        { rootMargin }
      ));

      io.observe(el);
    } else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }
}
