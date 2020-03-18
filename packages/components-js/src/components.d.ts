/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonType,
  FormState,
  LinkTarget,
  TextSize,
  TextWeight,
  Theme,
} from './types';
import {
  IconName,
} from './components/icon/icon/icon-name';
import {
  BreakpointCustomizable,
} from './utils';
import {
  NumberOfPageLinks,
} from './components/navigation/pagination/pagination';

export namespace Components {
  interface PButton {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The style variant of the button.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PButtonPure {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Size of the button.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The weight of the text (only has effect with visible label).
    */
    'weight'?: TextWeight;
  }
  interface PCheckboxWrapper {
    /**
    * Show or hide label. For better accessibility it's recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PFlex {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'>;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'inline'?: BreakpointCustomizable<boolean>;
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'wrap-reverse'>;
  }
  interface PFlexItem {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'>;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<0 | 1>;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    >;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<1 | 0>;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    >;
  }
  interface PGrid {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  }
  interface PGridItem {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  }
  interface PHeadline {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations depending on theme property.
    */
    'color'?: 'default' | 'inherit';
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the headline component.
    */
    'tag'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
    /**
    * Style of the text.
    */
    'variant'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4';
  }
  interface PIcon {
    /**
    * Basic color variations depending on theme property.
    */
    'color'?: 'brand' | 'default' | 'neutral-contrast-high' | 'neutral-contrast-medium' | 'neutral-contrast-low' | 'notification-success' | 'notification-warning' | 'notification-error' | 'inherit';
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * Specifies which icon to use.
    */
    'name'?: IconName;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies a whole icon path which can be used for custom icons.
    */
    'source'?: string;
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
    'variant'?: 'outline' | 'filled';
  }
  interface PLink {
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * When providing an url then the component will be rendered as `<a>`.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: LinkTarget;
    /**
    * Adapts the link color when used on dark background.
    */
    'theme'?: Theme;
    /**
    * The style variant of the link.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PLinkPure {
    /**
    * Display link in active state.
    */
    'active'?: boolean;
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * When providing an url then the component will be rendered as `<a>`.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * Size of the link.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: LinkTarget;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * The weight of the text (only has effect with visible label).
    */
    'weight'?: TextWeight;
  }
  interface PMarque {
    /**
    * Show/hide trademark sign.
    */
    'trademark'?: boolean;
  }
  interface PPagination {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * Aria label what the pagination is used for.
    */
    'allyLabel'?: string;
    /**
    * Aria label for next page icon.
    */
    'allyLabelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'allyLabelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'allyLabelPrev'?: string;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage': number;
    /**
    * The maximum number of page links rendered
    */
    'maxNumberOfPageLinks'?: NumberOfPageLinks| BreakpointCustomizable<NumberOfPageLinks>;
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount': number;
  }
  interface PRadioButtonWrapper {
    /**
    * Show or hide label. For better accessibility it's recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PSelectWrapper {
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PSpinner {
    /**
    * Size of the spinner.
    */
    'size'?: BreakpointCustomizable<'small' | 'medium' | 'large' | 'inherit'>;
    /**
    * Adapts the spinner color depending on the theme.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PText {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations depending on theme property.
    */
    'color'?: 'brand' | 'default' | 'neutral-contrast-high' | 'neutral-contrast-medium' | 'neutral-contrast-low' | 'notification-success' | 'notification-warning' | 'notification-error' | 'inherit';
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * Sets a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'cite'
    | 'time'
    | 'legend';
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
    /**
    * The weight of the text.
    */
    'weight'?: TextWeight;
  }
  interface PTextFieldWrapper {
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PTextList {
    /**
    * The type of the text list.
    */
    'listType'?: 'unordered' | 'ordered';
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
  }
  interface PTextListItem {}
  interface PTextareaWrapper {
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
}

declare global {


  interface HTMLPButtonElement extends Components.PButton, HTMLStencilElement {}
  var HTMLPButtonElement: {
    prototype: HTMLPButtonElement;
    new (): HTMLPButtonElement;
  };

  interface HTMLPButtonPureElement extends Components.PButtonPure, HTMLStencilElement {}
  var HTMLPButtonPureElement: {
    prototype: HTMLPButtonPureElement;
    new (): HTMLPButtonPureElement;
  };

  interface HTMLPCheckboxWrapperElement extends Components.PCheckboxWrapper, HTMLStencilElement {}
  var HTMLPCheckboxWrapperElement: {
    prototype: HTMLPCheckboxWrapperElement;
    new (): HTMLPCheckboxWrapperElement;
  };

  interface HTMLPFlexElement extends Components.PFlex, HTMLStencilElement {}
  var HTMLPFlexElement: {
    prototype: HTMLPFlexElement;
    new (): HTMLPFlexElement;
  };

  interface HTMLPFlexItemElement extends Components.PFlexItem, HTMLStencilElement {}
  var HTMLPFlexItemElement: {
    prototype: HTMLPFlexItemElement;
    new (): HTMLPFlexItemElement;
  };

  interface HTMLPGridElement extends Components.PGrid, HTMLStencilElement {}
  var HTMLPGridElement: {
    prototype: HTMLPGridElement;
    new (): HTMLPGridElement;
  };

  interface HTMLPGridItemElement extends Components.PGridItem, HTMLStencilElement {}
  var HTMLPGridItemElement: {
    prototype: HTMLPGridItemElement;
    new (): HTMLPGridItemElement;
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

  interface HTMLPLinkElement extends Components.PLink, HTMLStencilElement {}
  var HTMLPLinkElement: {
    prototype: HTMLPLinkElement;
    new (): HTMLPLinkElement;
  };

  interface HTMLPLinkPureElement extends Components.PLinkPure, HTMLStencilElement {}
  var HTMLPLinkPureElement: {
    prototype: HTMLPLinkPureElement;
    new (): HTMLPLinkPureElement;
  };

  interface HTMLPMarqueElement extends Components.PMarque, HTMLStencilElement {}
  var HTMLPMarqueElement: {
    prototype: HTMLPMarqueElement;
    new (): HTMLPMarqueElement;
  };

  interface HTMLPPaginationElement extends Components.PPagination, HTMLStencilElement {}
  var HTMLPPaginationElement: {
    prototype: HTMLPPaginationElement;
    new (): HTMLPPaginationElement;
  };

  interface HTMLPRadioButtonWrapperElement extends Components.PRadioButtonWrapper, HTMLStencilElement {}
  var HTMLPRadioButtonWrapperElement: {
    prototype: HTMLPRadioButtonWrapperElement;
    new (): HTMLPRadioButtonWrapperElement;
  };

  interface HTMLPSelectWrapperElement extends Components.PSelectWrapper, HTMLStencilElement {}
  var HTMLPSelectWrapperElement: {
    prototype: HTMLPSelectWrapperElement;
    new (): HTMLPSelectWrapperElement;
  };

  interface HTMLPSpinnerElement extends Components.PSpinner, HTMLStencilElement {}
  var HTMLPSpinnerElement: {
    prototype: HTMLPSpinnerElement;
    new (): HTMLPSpinnerElement;
  };

  interface HTMLPTextElement extends Components.PText, HTMLStencilElement {}
  var HTMLPTextElement: {
    prototype: HTMLPTextElement;
    new (): HTMLPTextElement;
  };

  interface HTMLPTextFieldWrapperElement extends Components.PTextFieldWrapper, HTMLStencilElement {}
  var HTMLPTextFieldWrapperElement: {
    prototype: HTMLPTextFieldWrapperElement;
    new (): HTMLPTextFieldWrapperElement;
  };

  interface HTMLPTextListElement extends Components.PTextList, HTMLStencilElement {}
  var HTMLPTextListElement: {
    prototype: HTMLPTextListElement;
    new (): HTMLPTextListElement;
  };

  interface HTMLPTextListItemElement extends Components.PTextListItem, HTMLStencilElement {}
  var HTMLPTextListItemElement: {
    prototype: HTMLPTextListItemElement;
    new (): HTMLPTextListItemElement;
  };

  interface HTMLPTextareaWrapperElement extends Components.PTextareaWrapper, HTMLStencilElement {}
  var HTMLPTextareaWrapperElement: {
    prototype: HTMLPTextareaWrapperElement;
    new (): HTMLPTextareaWrapperElement;
  };
  interface HTMLElementTagNameMap {
    'p-button': HTMLPButtonElement;
    'p-button-pure': HTMLPButtonPureElement;
    'p-checkbox-wrapper': HTMLPCheckboxWrapperElement;
    'p-flex': HTMLPFlexElement;
    'p-flex-item': HTMLPFlexItemElement;
    'p-grid': HTMLPGridElement;
    'p-grid-item': HTMLPGridItemElement;
    'p-headline': HTMLPHeadlineElement;
    'p-icon': HTMLPIconElement;
    'p-link': HTMLPLinkElement;
    'p-link-pure': HTMLPLinkPureElement;
    'p-marque': HTMLPMarqueElement;
    'p-pagination': HTMLPPaginationElement;
    'p-radio-button-wrapper': HTMLPRadioButtonWrapperElement;
    'p-select-wrapper': HTMLPSelectWrapperElement;
    'p-spinner': HTMLPSpinnerElement;
    'p-text': HTMLPTextElement;
    'p-text-field-wrapper': HTMLPTextFieldWrapperElement;
    'p-text-list': HTMLPTextListElement;
    'p-text-list-item': HTMLPTextListItemElement;
    'p-textarea-wrapper': HTMLPTextareaWrapperElement;
  }
}

declare namespace LocalJSX {
  interface PButton {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The style variant of the button.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PButtonPure {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Size of the button.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The weight of the text (only has effect with visible label).
    */
    'weight'?: TextWeight;
  }
  interface PCheckboxWrapper {
    /**
    * Show or hide label. For better accessibility it's recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PFlex {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'>;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'inline'?: BreakpointCustomizable<boolean>;
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'wrap-reverse'>;
  }
  interface PFlexItem {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'>;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<0 | 1>;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    >;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<1 | 0>;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    >;
  }
  interface PGrid {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  }
  interface PGridItem {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  }
  interface PHeadline {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations depending on theme property.
    */
    'color'?: 'default' | 'inherit';
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the headline component.
    */
    'tag'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
    /**
    * Style of the text.
    */
    'variant'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4';
  }
  interface PIcon {
    /**
    * Basic color variations depending on theme property.
    */
    'color'?: 'brand' | 'default' | 'neutral-contrast-high' | 'neutral-contrast-medium' | 'neutral-contrast-low' | 'notification-success' | 'notification-warning' | 'notification-error' | 'inherit';
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * Specifies which icon to use.
    */
    'name'?: IconName;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies a whole icon path which can be used for custom icons.
    */
    'source'?: string;
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
  }
  interface PLink {
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * When providing an url then the component will be rendered as `<a>`.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: LinkTarget;
    /**
    * Adapts the link color when used on dark background.
    */
    'theme'?: Theme;
    /**
    * The style variant of the link.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PLinkPure {
    /**
    * Display link in active state.
    */
    'active'?: boolean;
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * When providing an url then the component will be rendered as `<a>`.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * Size of the link.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: LinkTarget;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * The weight of the text (only has effect with visible label).
    */
    'weight'?: TextWeight;
  }
  interface PMarque {
    /**
    * Show/hide trademark sign.
    */
    'trademark'?: boolean;
  }
  interface PPagination {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * Aria label what the pagination is used for.
    */
    'allyLabel'?: string;
    /**
    * Aria label for next page icon.
    */
    'allyLabelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'allyLabelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'allyLabelPrev'?: string;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage'?: number;
    /**
    * The maximum number of page links rendered
    */
    'maxNumberOfPageLinks'?: NumberOfPageLinks| BreakpointCustomizable<NumberOfPageLinks>;
    /**
    * Emitted when the page changes.
    */
    'onPageChange'?: (event: CustomEvent<any>) => void;
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount'?: number;
  }
  interface PRadioButtonWrapper {
    /**
    * Show or hide label. For better accessibility it's recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PSelectWrapper {
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PSpinner {
    /**
    * Size of the spinner.
    */
    'size'?: BreakpointCustomizable<'small' | 'medium' | 'large' | 'inherit'>;
    /**
    * Adapts the spinner color depending on the theme.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PText {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations depending on theme property.
    */
    'color'?: 'brand' | 'default' | 'neutral-contrast-high' | 'neutral-contrast-medium' | 'neutral-contrast-low' | 'notification-success' | 'notification-warning' | 'notification-error' | 'inherit';
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * Sets a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'cite'
    | 'time'
    | 'legend';
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
    /**
    * The weight of the text.
    */
    'weight'?: TextWeight;
  }
  interface PTextFieldWrapper {
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }
  interface PTextList {
    /**
    * The type of the text list.
    */
    'listType'?: 'unordered' | 'ordered';
    /**
    * Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop.
    */
    'theme'?: Theme;
  }
  interface PTextListItem {}
  interface PTextareaWrapper {
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The label text.
    */
    'label'?: string;
    /**
    * The message styled depending on validation state.
    */
    'message'?: string;
    /**
    * The validation state.
    */
    'state'?: FormState;
  }

  interface IntrinsicElements {
    'p-button': PButton;
    'p-button-pure': PButtonPure;
    'p-checkbox-wrapper': PCheckboxWrapper;
    'p-flex': PFlex;
    'p-flex-item': PFlexItem;
    'p-grid': PGrid;
    'p-grid-item': PGridItem;
    'p-headline': PHeadline;
    'p-icon': PIcon;
    'p-link': PLink;
    'p-link-pure': PLinkPure;
    'p-marque': PMarque;
    'p-pagination': PPagination;
    'p-radio-button-wrapper': PRadioButtonWrapper;
    'p-select-wrapper': PSelectWrapper;
    'p-spinner': PSpinner;
    'p-text': PText;
    'p-text-field-wrapper': PTextFieldWrapper;
    'p-text-list': PTextList;
    'p-text-list-item': PTextListItem;
    'p-textarea-wrapper': PTextareaWrapper;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'p-button': LocalJSX.PButton & JSXBase.HTMLAttributes<HTMLPButtonElement>;
      'p-button-pure': LocalJSX.PButtonPure & JSXBase.HTMLAttributes<HTMLPButtonPureElement>;
      'p-checkbox-wrapper': LocalJSX.PCheckboxWrapper & JSXBase.HTMLAttributes<HTMLPCheckboxWrapperElement>;
      'p-flex': LocalJSX.PFlex & JSXBase.HTMLAttributes<HTMLPFlexElement>;
      'p-flex-item': LocalJSX.PFlexItem & JSXBase.HTMLAttributes<HTMLPFlexItemElement>;
      'p-grid': LocalJSX.PGrid & JSXBase.HTMLAttributes<HTMLPGridElement>;
      'p-grid-item': LocalJSX.PGridItem & JSXBase.HTMLAttributes<HTMLPGridItemElement>;
      'p-headline': LocalJSX.PHeadline & JSXBase.HTMLAttributes<HTMLPHeadlineElement>;
      'p-icon': LocalJSX.PIcon & JSXBase.HTMLAttributes<HTMLPIconElement>;
      'p-link': LocalJSX.PLink & JSXBase.HTMLAttributes<HTMLPLinkElement>;
      'p-link-pure': LocalJSX.PLinkPure & JSXBase.HTMLAttributes<HTMLPLinkPureElement>;
      'p-marque': LocalJSX.PMarque & JSXBase.HTMLAttributes<HTMLPMarqueElement>;
      'p-pagination': LocalJSX.PPagination & JSXBase.HTMLAttributes<HTMLPPaginationElement>;
      'p-radio-button-wrapper': LocalJSX.PRadioButtonWrapper & JSXBase.HTMLAttributes<HTMLPRadioButtonWrapperElement>;
      'p-select-wrapper': LocalJSX.PSelectWrapper & JSXBase.HTMLAttributes<HTMLPSelectWrapperElement>;
      'p-spinner': LocalJSX.PSpinner & JSXBase.HTMLAttributes<HTMLPSpinnerElement>;
      'p-text': LocalJSX.PText & JSXBase.HTMLAttributes<HTMLPTextElement>;
      'p-text-field-wrapper': LocalJSX.PTextFieldWrapper & JSXBase.HTMLAttributes<HTMLPTextFieldWrapperElement>;
      'p-text-list': LocalJSX.PTextList & JSXBase.HTMLAttributes<HTMLPTextListElement>;
      'p-text-list-item': LocalJSX.PTextListItem & JSXBase.HTMLAttributes<HTMLPTextListItemElement>;
      'p-textarea-wrapper': LocalJSX.PTextareaWrapper & JSXBase.HTMLAttributes<HTMLPTextareaWrapperElement>;
    }
  }
}


