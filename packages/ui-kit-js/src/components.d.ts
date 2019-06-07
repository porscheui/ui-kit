/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  BreakpointCustomizable,
} from './utils';
import {
  Components,
} from './index';

export namespace Components {
  interface PButtonIcon {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: "button" | "submit" | "reset";
    /**
    * The style variant of the button.
    */
    'variant'?: "ghost" | "transparent" | "default";
  }
  interface PButtonRegular {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Displays the button smaller.
    */
    'small'?: boolean;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: "button" | "submit" | "reset";
    /**
    * The style variant of the button.
    */
    'variant'?: "highlight" | "ghost" | "default";
  }
  interface PCheckbox {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PColor {
    'colors'?: | "porsche-black"
    | "porsche-light"
    | "porsche-dark"
    | "porsche-red"
    | "porsche-dark-red"
    | "surface-light"
    | "surface-dark"
    | "neutral-grey-1"
    | "neutral-grey-2"
    | "neutral-grey-3"
    | "neutral-grey-4"
    | "neutral-grey-5"
    | "neutral-grey-6"
    | "neutral-grey-7"
    | "neutral-grey-8"
    | "status-red"
    | "status-green"
    | "status-yellow"
    | "state-focus";
    'text'?: | "porsche-black"
    | "porsche-light"
    | "porsche-red"
    | "neutral-grey-1"
    | "neutral-grey-2"
    | "neutral-grey-3"
    | "neutral-grey-4"
    | "neutral-grey-5"
    | "neutral-grey-6"
    | "neutral-grey-7"
    | "neutral-grey-8"
    | "inherit";
  }
  interface PGrid {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {"base": "column", "l": "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<"row" | "row-reverse" | "column" | "column-reverse" | any>;
    /**
    * Defines the gap between contained children. The value "normal" (default) sets responsive grid spacings that should be used together with Grid.Child. Also defines the gap for specific breakpoints, like {"base": "zero", "l": "normal"}. You always need to provide a base value when doing this.
    */
    'gap'?: BreakpointCustomizable<"normal" | "zero" | any>;
  }
  interface PGridChild {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | any>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | any>;
  }
  interface PHeadline {
    /**
    * The text alignment of the component.
    */
    'align'?: "left" | "center" | "right";
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets the text as display: inline.
    */
    'inline'?: boolean;
    /**
    * Headline level/hierarchy.
    */
    'level'?: "1" | "2" | "3" | "4" | "5" | "6";
    /**
    * Adapts the text color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * The style of the text.
    */
    'type'?: | "large-title"
    | "headline-1"
    | "headline-2"
    | "headline-3"
    | "headline-4"
    | "headline-5"
    | "headline-6";
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Basic color variations.
    */
    'color'?: Components.PColor["text"];
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * The size of the icon.
    */
    'size'?: "small" | "medium" | "large" | "inherit";
    /**
    * Specifies which icon to use.
    */
    'source': string;
  }
  interface PInput {
    'disabled'?: boolean;
    'error'?: boolean;
    'icon'?: string;
    'label'?: string;
    'name'?: string;
    'type'?: "text" | "number";
    'value'?: string;
  }
  interface PLoader {
    /**
    * Predefined loader sizes.
    */
    'size'?: "x-small" | "small" | "medium" | "large";
    /**
    * Adapts the loader color when used on dark background.
    */
    'theme'?: "light" | "dark";
  }
  interface PRadio {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PSelect {
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PText {
    /**
    * The text alignment of the component.
    */
    'align'?: "left" | "center" | "right";
    /**
    * Basic text color variations.
    */
    'color'?: Components.PColor["text"];
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets the text as display: inline.
    */
    'inline'?: boolean;
    /**
    * Set a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | "p"
    | "span"
    | "div"
    | "label"
    | "address"
    | "blockquote"
    | "figcaption"
    | "a"
    | "cite"
    | "time"
    | "sup"
    | "sub"
    | "legend";
    /**
    * The style of the text.
    */
    'type'?: | "copy"
    | "small"
    | "12"
    | "16"
    | "18"
    | "20"
    | "24"
    | "28"
    | "30"
    | "32"
    | "36"
    | "42"
    | "44"
    | "48"
    | "52"
    | "60"
    | "60-thin"
    | "62"
    | "62-thin"
    | "72"
    | "72-thin"
    | "84"
    | "84-thin";
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PTextLink {
    /**
    * Special download attribute to open native Browser download dialog if target url points to a downloadable file.
    */
    'download'?: boolean;
    /**
    * Target url to where the component should link to.
    */
    'href': string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: "self" | "blank" | "parent" | "top";
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * The style of the text.
    */
    'type'?: Components.PText["type"];
  }
  interface PTextarea {
    'disabled'?: boolean;
    'error'?: boolean;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PToggle {
    /**
    * Shows the toggle button checked or unchecked
    */
    'checked'?: boolean;
    /**
    * Disables the toggle button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Sets the input name
    */
    'name': string;
    'value': string;
  }
}

declare global {


  interface HTMLPButtonIconElement extends Components.PButtonIcon, HTMLStencilElement {}
  var HTMLPButtonIconElement: {
    prototype: HTMLPButtonIconElement;
    new (): HTMLPButtonIconElement;
  };

  interface HTMLPButtonRegularElement extends Components.PButtonRegular, HTMLStencilElement {}
  var HTMLPButtonRegularElement: {
    prototype: HTMLPButtonRegularElement;
    new (): HTMLPButtonRegularElement;
  };

  interface HTMLPCheckboxElement extends Components.PCheckbox, HTMLStencilElement {}
  var HTMLPCheckboxElement: {
    prototype: HTMLPCheckboxElement;
    new (): HTMLPCheckboxElement;
  };

  interface HTMLPColorElement extends Components.PColor, HTMLStencilElement {}
  var HTMLPColorElement: {
    prototype: HTMLPColorElement;
    new (): HTMLPColorElement;
  };

  interface HTMLPGridElement extends Components.PGrid, HTMLStencilElement {}
  var HTMLPGridElement: {
    prototype: HTMLPGridElement;
    new (): HTMLPGridElement;
  };

  interface HTMLPGridChildElement extends Components.PGridChild, HTMLStencilElement {}
  var HTMLPGridChildElement: {
    prototype: HTMLPGridChildElement;
    new (): HTMLPGridChildElement;
  };

  interface HTMLPHeadlineElement extends Components.PHeadline, HTMLStencilElement {}
  var HTMLPHeadlineElement: {
    prototype: HTMLPHeadlineElement;
    new (): HTMLPHeadlineElement;
  };

  interface HTMLPIconElement extends Components.PIcon, HTMLStencilElement {}
  var HTMLPIconElement: {
    prototype: HTMLPIconElement;
    new (): HTMLPIconElement;
  };

  interface HTMLPInputElement extends Components.PInput, HTMLStencilElement {}
  var HTMLPInputElement: {
    prototype: HTMLPInputElement;
    new (): HTMLPInputElement;
  };

  interface HTMLPLoaderElement extends Components.PLoader, HTMLStencilElement {}
  var HTMLPLoaderElement: {
    prototype: HTMLPLoaderElement;
    new (): HTMLPLoaderElement;
  };

  interface HTMLPRadioElement extends Components.PRadio, HTMLStencilElement {}
  var HTMLPRadioElement: {
    prototype: HTMLPRadioElement;
    new (): HTMLPRadioElement;
  };

  interface HTMLPSelectElement extends Components.PSelect, HTMLStencilElement {}
  var HTMLPSelectElement: {
    prototype: HTMLPSelectElement;
    new (): HTMLPSelectElement;
  };

  interface HTMLPTextElement extends Components.PText, HTMLStencilElement {}
  var HTMLPTextElement: {
    prototype: HTMLPTextElement;
    new (): HTMLPTextElement;
  };

  interface HTMLPTextLinkElement extends Components.PTextLink, HTMLStencilElement {}
  var HTMLPTextLinkElement: {
    prototype: HTMLPTextLinkElement;
    new (): HTMLPTextLinkElement;
  };

  interface HTMLPTextareaElement extends Components.PTextarea, HTMLStencilElement {}
  var HTMLPTextareaElement: {
    prototype: HTMLPTextareaElement;
    new (): HTMLPTextareaElement;
  };

  interface HTMLPToggleElement extends Components.PToggle, HTMLStencilElement {}
  var HTMLPToggleElement: {
    prototype: HTMLPToggleElement;
    new (): HTMLPToggleElement;
  };
  interface HTMLElementTagNameMap {
    'p-button-icon': HTMLPButtonIconElement;
    'p-button-regular': HTMLPButtonRegularElement;
    'p-checkbox': HTMLPCheckboxElement;
    'p-color': HTMLPColorElement;
    'p-grid': HTMLPGridElement;
    'p-grid-child': HTMLPGridChildElement;
    'p-headline': HTMLPHeadlineElement;
    'p-icon': HTMLPIconElement;
    'p-input': HTMLPInputElement;
    'p-loader': HTMLPLoaderElement;
    'p-radio': HTMLPRadioElement;
    'p-select': HTMLPSelectElement;
    'p-text': HTMLPTextElement;
    'p-text-link': HTMLPTextLinkElement;
    'p-textarea': HTMLPTextareaElement;
    'p-toggle': HTMLPToggleElement;
  }
}

declare namespace LocalJSX {
  interface PButtonIcon extends JSXBase.HTMLAttributes<HTMLPButtonIconElement> {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Emitted when the button loses focus.
    */
    'onPBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button has focus.
    */
    'onPFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: "button" | "submit" | "reset";
    /**
    * The style variant of the button.
    */
    'variant'?: "ghost" | "transparent" | "default";
  }
  interface PButtonRegular extends JSXBase.HTMLAttributes<HTMLPButtonRegularElement> {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Emitted when the button loses focus.
    */
    'onPBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button has focus.
    */
    'onPFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Displays the button smaller.
    */
    'small'?: boolean;
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: "button" | "submit" | "reset";
    /**
    * The style variant of the button.
    */
    'variant'?: "highlight" | "ghost" | "default";
  }
  interface PCheckbox extends JSXBase.HTMLAttributes<HTMLPCheckboxElement> {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'name'?: string;
    'value'?: string;
  }
  interface PColor extends JSXBase.HTMLAttributes<HTMLPColorElement> {
    'colors'?: | "porsche-black"
    | "porsche-light"
    | "porsche-dark"
    | "porsche-red"
    | "porsche-dark-red"
    | "surface-light"
    | "surface-dark"
    | "neutral-grey-1"
    | "neutral-grey-2"
    | "neutral-grey-3"
    | "neutral-grey-4"
    | "neutral-grey-5"
    | "neutral-grey-6"
    | "neutral-grey-7"
    | "neutral-grey-8"
    | "status-red"
    | "status-green"
    | "status-yellow"
    | "state-focus";
    'text'?: | "porsche-black"
    | "porsche-light"
    | "porsche-red"
    | "neutral-grey-1"
    | "neutral-grey-2"
    | "neutral-grey-3"
    | "neutral-grey-4"
    | "neutral-grey-5"
    | "neutral-grey-6"
    | "neutral-grey-7"
    | "neutral-grey-8"
    | "inherit";
  }
  interface PGrid extends JSXBase.HTMLAttributes<HTMLPGridElement> {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {"base": "column", "l": "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<"row" | "row-reverse" | "column" | "column-reverse" | any>;
    /**
    * Defines the gap between contained children. The value "normal" (default) sets responsive grid spacings that should be used together with Grid.Child. Also defines the gap for specific breakpoints, like {"base": "zero", "l": "normal"}. You always need to provide a base value when doing this.
    */
    'gap'?: BreakpointCustomizable<"normal" | "zero" | any>;
  }
  interface PGridChild extends JSXBase.HTMLAttributes<HTMLPGridChildElement> {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | any>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | any>;
  }
  interface PHeadline extends JSXBase.HTMLAttributes<HTMLPHeadlineElement> {
    /**
    * The text alignment of the component.
    */
    'align'?: "left" | "center" | "right";
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets the text as display: inline.
    */
    'inline'?: boolean;
    /**
    * Headline level/hierarchy.
    */
    'level'?: "1" | "2" | "3" | "4" | "5" | "6";
    /**
    * Adapts the text color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * The style of the text.
    */
    'type'?: | "large-title"
    | "headline-1"
    | "headline-2"
    | "headline-3"
    | "headline-4"
    | "headline-5"
    | "headline-6";
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PIcon extends JSXBase.HTMLAttributes<HTMLPIconElement> {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Basic color variations.
    */
    'color'?: Components.PColor["text"];
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * The size of the icon.
    */
    'size'?: "small" | "medium" | "large" | "inherit";
    /**
    * Specifies which icon to use.
    */
    'source'?: string;
  }
  interface PInput extends JSXBase.HTMLAttributes<HTMLPInputElement> {
    'disabled'?: boolean;
    'error'?: boolean;
    'icon'?: string;
    'label'?: string;
    'name'?: string;
    'type'?: "text" | "number";
    'value'?: string;
  }
  interface PLoader extends JSXBase.HTMLAttributes<HTMLPLoaderElement> {
    /**
    * Predefined loader sizes.
    */
    'size'?: "x-small" | "small" | "medium" | "large";
    /**
    * Adapts the loader color when used on dark background.
    */
    'theme'?: "light" | "dark";
  }
  interface PRadio extends JSXBase.HTMLAttributes<HTMLPRadioElement> {
    'checked'?: boolean;
    'disabled'?: boolean;
    'error'?: boolean;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PSelect extends JSXBase.HTMLAttributes<HTMLPSelectElement> {
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PText extends JSXBase.HTMLAttributes<HTMLPTextElement> {
    /**
    * The text alignment of the component.
    */
    'align'?: "left" | "center" | "right";
    /**
    * Basic text color variations.
    */
    'color'?: Components.PColor["text"];
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets the text as display: inline.
    */
    'inline'?: boolean;
    /**
    * Set a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | "p"
    | "span"
    | "div"
    | "label"
    | "address"
    | "blockquote"
    | "figcaption"
    | "a"
    | "cite"
    | "time"
    | "sup"
    | "sub"
    | "legend";
    /**
    * The style of the text.
    */
    'type'?: | "copy"
    | "small"
    | "12"
    | "16"
    | "18"
    | "20"
    | "24"
    | "28"
    | "30"
    | "32"
    | "36"
    | "42"
    | "44"
    | "48"
    | "52"
    | "60"
    | "60-thin"
    | "62"
    | "62-thin"
    | "72"
    | "72-thin"
    | "84"
    | "84-thin";
    /**
    * Wraps the text, even when it has to break a word.
    */
    'wrap'?: boolean;
  }
  interface PTextLink extends JSXBase.HTMLAttributes<HTMLPTextLinkElement> {
    /**
    * Special download attribute to open native Browser download dialog if target url points to a downloadable file.
    */
    'download'?: boolean;
    /**
    * Target url to where the component should link to.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Emitted when the link is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: "self" | "blank" | "parent" | "top";
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: "light" | "dark";
    /**
    * The style of the text.
    */
    'type'?: Components.PText["type"];
  }
  interface PTextarea extends JSXBase.HTMLAttributes<HTMLPTextareaElement> {
    'disabled'?: boolean;
    'error'?: boolean;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface PToggle extends JSXBase.HTMLAttributes<HTMLPToggleElement> {
    /**
    * Shows the toggle button checked or unchecked
    */
    'checked'?: boolean;
    /**
    * Disables the toggle button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Sets the input name
    */
    'name'?: string;
    'value'?: string;
  }

  interface IntrinsicElements {
    'p-button-icon': PButtonIcon;
    'p-button-regular': PButtonRegular;
    'p-checkbox': PCheckbox;
    'p-color': PColor;
    'p-grid': PGrid;
    'p-grid-child': PGridChild;
    'p-headline': PHeadline;
    'p-icon': PIcon;
    'p-input': PInput;
    'p-loader': PLoader;
    'p-radio': PRadio;
    'p-select': PSelect;
    'p-text': PText;
    'p-text-link': PTextLink;
    'p-textarea': PTextarea;
    'p-toggle': PToggle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


