import { JSX, Component, Prop, h, Element, Listen } from '@stencil/core';
import {
  getPrefixedTagNames,
  improveButtonHandlingForCustomElement,
  improveFocusHandlingForCustomElement,
  isDark,
  mapBreakpointPropToClasses,
} from '../../../utils';
import type { BreakpointCustomizable, ButtonType, ButtonVariant, IconName, Theme } from '../../../types';

@Component({
  tag: 'p-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() public host!: HTMLElement;

  /** To remove the element from tab order. */
  @Prop() public tabbable?: boolean = true;

  /** Specifies the type of the button. */
  @Prop() public type?: ButtonType = 'submit';

  /** Disables the button. No events will be triggered while disabled state is active. */
  @Prop() public disabled?: boolean = false;

  /** Disables the button and shows a loading indicator. No events will be triggered while loading state is active. */
  @Prop() public loading?: boolean = false;

  /** The style variant of the button. */
  @Prop() public variant?: ButtonVariant = 'secondary';

  /** The icon shown. */
  @Prop() public icon?: IconName = 'arrow-head-right';

  /** A custom URL path to a custom icon. */
  @Prop() public iconSource?: string = undefined;

  /** Show or hide label. For better accessibility it is recommended to show the label. */
  @Prop() public hideLabel?: BreakpointCustomizable<boolean> = false;

  /** Adapts the button color depending on the theme. */
  @Prop() public theme?: Theme = 'light';

  @Listen('click', { capture: true })
  public handleOnClick(e: MouseEvent): void {
    if (this.isDisabled) {
      e.stopPropagation();
    }
  }

  public componentDidLoad(): void {
    improveFocusHandlingForCustomElement(this.host);
    improveButtonHandlingForCustomElement(
      this.host,
      () => this.type,
      () => this.isDisabled
    );
  }

  public render(): JSX.Element {
    const buttonClasses = {
      ['button']: true,
      [`button--${this.variant}`]: this.variant !== 'secondary',
      ['button--theme-dark']: isDark(this.theme),
      ...mapBreakpointPropToClasses('button-', this.hideLabel, ['without-label', 'with-label']),
    };

    const iconProps = {
      class: 'icon',
      size: 'inherit',
    };

    const PrefixedTagNames = getPrefixedTagNames(this.host);

    return (
      <button
        class={buttonClasses}
        type={this.type}
        disabled={this.isDisabled}
        tabindex={this.tabbable ? 0 : -1}
        aria-busy={this.loading ? 'true' : null}
      >
        {this.loading ? (
          <PrefixedTagNames.pSpinner {...iconProps} theme={this.variant === 'tertiary' ? this.theme : 'dark'} />
        ) : (
          <PrefixedTagNames.pIcon
            {...iconProps}
            name={this.icon}
            source={this.iconSource}
            color="inherit"
            aria-hidden="true"
          />
        )}
        <PrefixedTagNames.pText class="label" tag="span" color="inherit">
          <slot />
        </PrefixedTagNames.pText>
      </button>
    );
  }

  private get isDisabled(): boolean {
    return this.disabled || this.loading;
  }
}
