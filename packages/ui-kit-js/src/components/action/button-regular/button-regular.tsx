import { JSX, Component, Prop, h, Event, EventEmitter, Element } from "@stencil/core";
import cx from "classnames";
import { prefix } from "../../../utils/prefix";
import { hasShadowDom } from "../../../utils/hasShadowDom";

@Component({
  tag: "p-button-regular",
  styleUrl: "button-regular.scss",
  shadow: true
})
export class ButtonRegular {
  @Element() element!: HTMLElement;

  /** Specifies the type of the button when no href prop is defined. */
  @Prop() type?: "button" | "submit" | "reset" = "button";

  /** When providing an url then the component will be rendered as `<a>` instead of `<button>` tag. */
  @Prop() href?: string = undefined;

  /** Disables the button. No events will be triggered while disabled state is active. */
  @Prop() disabled?: boolean = false;

  /** Disables the button and shows a loading indicator. No events will be triggered while loading state is active. */
  @Prop() loading?: boolean = false;

  /** The style variant of the button. */
  @Prop() variant?: "highlight" | "ghost" | "default" = "default";

  /** The icon shown next to the label. */
  @Prop() icon?: string = "arrow-right-hair";

  /** Displays the button smaller. */
  @Prop() small?: boolean = false;

  /** Adapts the button color when used on dark background. */
  @Prop() theme?: "light" | "dark" = "light";

  /** Emitted when the button is clicked. */
  @Event() pClick!: EventEmitter<void>;

  /** Emitted when the button has focus. */
  @Event() pFocus!: EventEmitter<void>;

  /** Emitted when the button loses focus. */
  @Event() pBlur!: EventEmitter<void>;

  private onClick(event): void {
    this.pClick.emit(event);

    if (!this.href && this.type === "submit" && hasShadowDom(this.element)) {
      // Why? That's why: https://www.hjorthhansen.dev/shadow-dom-and-forms/
      const form = this.element.closest("form");
      if (form) {
        event.preventDefault();

        const fakeButton = document.createElement("button");
        fakeButton.type = this.type;
        fakeButton.style.display = "none";
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }

  private onFocus(event): void {
    this.pFocus.emit(event);
  }

  private onBlur(event): void {
    this.pBlur.emit(event);
  }

  private useInvertedLoader(): "light" | "dark" {
    return this.variant !== "ghost" || this.theme === "dark" ? "dark" : "light";
  }

  render(): JSX.Element {
    const TagType = this.href === undefined ? "button" : "a";

    const buttonClasses = cx(
      prefix("button-regular"),
      { [prefix("button-regular--highlight")]: this.variant === "highlight" },
      { [prefix("button-regular--ghost")]: this.variant === "ghost" },
      { [prefix("button-regular--loading")]: this.loading },
      { [prefix("button-regular--small")]: this.small },
      { [prefix("button-regular--theme-dark")]: this.theme === "dark" }
    );
    const iconClasses = prefix("button-regular__icon");
    const loaderClasses = prefix("button-regular__loader");
    const labelClasses = prefix("button-regular__label");

    return (
      <TagType
        class={buttonClasses}
        {...(TagType === "button"
          ? { type: this.type, disabled: this.disabled || this.loading }
          : { href: this.href, "aria-disabled": String(this.disabled || this.loading) })}
        onClick={(e) => this.onClick(e)}
        onFocus={(e) => this.onFocus(e)}
        onBlur={(e) => this.onBlur(e)}
      >
        {this.loading ? (
          <p-loader class={loaderClasses} size="x-small" theme={this.useInvertedLoader()} />
        ) : (
          <p-icon class={iconClasses} source={this.icon} />
        )}
        <p-text tag="span" color="inherit" class={labelClasses}>
          <slot />
        </p-text>
      </TagType>
    );
  }
}
