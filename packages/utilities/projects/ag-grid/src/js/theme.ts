import {
  borderRadiusMedium,
  borderRadiusSmall,
  borderWidthBase,
  fontFamily,
  fontSizeTextSmall,
  fontSizeTextXSmall,
  fontWeightSemiBold,
  spacingStaticXSmall,
  themeDarkBackgroundBase,
  themeDarkBackgroundFrosted,
  themeDarkBackgroundSurface,
  themeDarkContrastLow,
  themeDarkContrastMedium,
  themeDarkNotificationError,
  themeDarkNotificationInfo,
  themeDarkNotificationSuccess,
  themeDarkPrimary,
  themeDarkStateDisabled,
  themeDarkStateFocus,
  themeDarkStateHover,
  themeLightBackgroundBase,
  themeLightBackgroundFrosted,
  themeLightBackgroundSurface,
  themeLightContrastLow,
  themeLightContrastMedium,
  themeLightNotificationError,
  themeLightNotificationInfo,
  themeLightNotificationSuccess,
  themeLightPrimary,
  themeLightStateDisabled,
  themeLightStateFocus,
  themeLightStateHover,
} from '@porsche-design-system/components-js/styles';

import { type Theme, createPart, iconOverrides, themeQuartz } from 'ag-grid-community';

// TODO Hover color for Checkbox, Toggle Button etc. missing
// TODO Radio button styles missing

const enum PdsThemeMode {
  LIGHT = 'ag-theme-pds',
  DARK = 'ag-theme-pds-dark',
}

import type { IconName } from '@porsche-design-system/icons';
import { buildIconUrl } from './icon-utils';
const svgToDataUrl = (svg: string) => `data:image/svg+xml;charset=UTF-8, ${svg}`;

// Custom inline SVG icons that are not part of the PDS Icon Set
const aggregation = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M17.2 19.3H5.7l6.5-7.6-6.5-7h11.5v1H7.9l5.7 6-5.7 6.6h9.3z" style="fill:%23020202"/></svg>`;
const arrows = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="m22 12-2-3h-1.4l1.7 2.5H15v1h5.3L18.6 15H20l2-3zM12 2 9 4v1.4l2.5-1.7V9h1V3.7L15 5.4V4zM12.5 20.3V15h-1v5.3L9 18.6V20l3 2 3-2v-1.4zM9 11.5H3.7L5.4 9H4l-2 3 2 3h1.4l-1.7-2.5H9z"/></svg>`;
const colorPicker = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M19.3 6.7c0-1.1-.9-2-2-2-.6 0-.9.2-1.4.6L13.1 8l-1.2-1.2c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l1.2 1.2-7.7 7.9v2.7h2.8l7.7-7.7 1.2 1.2c.1.1.2.1.4.1s.3 0 .4-.1c.2-.2.2-.5 0-.7L16 10.9l2.6-2.6c.4-.5.7-1 .7-1.6zM7.1 18.3H5.7V17l7.4-7.5 1.4 1.4-7.4 7.4z"/></svg>`;
const csv = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M13 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm0 1.4L17.6 8H13V3.4zM6 20V4c0-.6.4-1 1-1h5v6h6v11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1"/><path d="M7.1 17.7c0-1.6.4-2.1 1.6-2.1 1.2 0 1.4.5 1.4 1.6h-.7c0-.8-.2-1-.8-1-.7 0-.9.3-.9 1.5 0 1.4.1 1.6.9 1.6.6 0 .7-.3.8-1h.7c0 1.1-.4 1.6-1.4 1.6-1.3 0-1.6-.6-1.6-2.2zM11.2 18.5c0 .6.2.8.7.8.5 0 .7-.2.7-.6 0-.4-.2-.5-.7-.6l-.2-.1c-.7-.2-1.1-.4-1.1-1.2 0-.7.4-1.2 1.3-1.2 1 0 1.3.5 1.4 1.4h-.7c0-.6-.2-.8-.7-.8-.4 0-.7.2-.7.6 0 .4.2.5.7.6l.3.1c.7.2 1.1.5 1.1 1.2s-.4 1.2-1.4 1.2c-1 0-1.3-.4-1.4-1.3h.7zM13.5 15.6h.7l1 3.4 1-3.4h.6l-1.2 4.2h-.8l-1.3-4.2z"/></svg>`;
const cut = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M10.2 9.2c.3-.4.5-1 .5-1.5C10.6 6.2 9.5 5 8 5S5.4 6.2 5.4 7.7s1.2 2.6 2.6 2.6c.5 0 1-.2 1.4-.4l1.8 1.9-1.9 2c-.3-.2-.8-.3-1.3-.3-1.5 0-2.6 1.2-2.6 2.6 0 1.5 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6c0-.6-.2-1.1-.5-1.5l1.8-2L17 18h1.3l-8.1-8.8zM8 9.3c-.9 0-1.6-.7-1.6-1.6S7.1 6.1 8 6.1c.9 0 1.6.7 1.6 1.6S8.9 9.3 8 9.3zm0 8.4c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6z"/><path d="m18.4 5.6-1.3-.1-4.4 4.8.7.8zM57.2 6.7c0-1.1-.9-2-2-2-.6 0-.9.2-1.4.6L51 8.1l2.8 2.8 2.7-2.7c.4-.4.7-.9.7-1.5z"/><path d="m51.1 9.5 1.4 1.4-7.4 7.4h-1.4V17l7.4-7.5m0-1.4-8.4 8.6v2.7h2.8l8.4-8.4-2.8-2.9z"/><path d="m54.8 12.4-5.3-5.3" style="fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"/></svg>`;
const excel = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" style="enable-background:new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><style>.st0{fill:%23030104}</style><path d="M13 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8l-6-6zm0 1.4L17.6 8H13V3.4zM6 20V4c0-.6.4-1 1-1h5v6h6v11c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1"/><path d="M16.3 11.4H13v1.1h1.1v.7H13v.7h1.1v.7H13v.7h1.1v.7H13v.7h1.1v.7H13v1.1h3.3c.2 0 .3-.1.3-.3v-6.5c0-.1-.1-.3-.3-.3zm-.4 6.1h-1.4v-.7h1.4v.7zm0-1.4h-1.4v-.7h1.4v.7zm0-1.5h-1.4v-.7h1.4v.7zm0-1.4h-1.4v-.7h1.4v.7zM7.4 11.4v7.2l5.3 1v-9.2l-5.3 1zm3.4 5.4-.6-1.2s0-.1-.1-.2c0 .1 0 .1-.1.3l-.6 1.2h-1L9.5 15l-1.1-1.8h1l.5 1.1c0 .1.1.2.1.3 0-.1.1-.2.1-.3l.6-1.1h.9l-1 1.8 1.1 1.8h-.9z" class="st0"/></svg>`;
const group = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M8.5 6.4H18v1H8.5zM8.5 8.4H18v1H8.5zM8 11H5.5V5H8v1H6.5v4H8zM8.5 14.4H18v1H8.5zM8.5 16.4H18v1H8.5zM8 19H5.5v-6H8v1H6.5v4H8z"/></svg>`;
const linked = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" style="enable-background:new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><style>.st0{fill:%23020202}</style><path d="m16.5 13.4-.9-.9 1.8-1.8c1.1-1.1 1.1-3 0-4.1-1.1-1.1-3-1.1-4.1 0l-1.8 1.8-.9-.9 1.8-1.8c1.6-1.6 4.3-1.6 5.9 0 1.6 1.6 1.6 4.3 0 5.9l-1.8 1.8zM8.7 19.5c-1.1 0-2.1-.4-2.9-1.2-1.6-1.6-1.6-4.3 0-5.9l1.8-1.8.9.9-1.8 1.8c-1.1 1.1-1.1 3 0 4.1 1.1 1.1 3 1.1 4.1 0l1.8-1.8.9.9-1.8 1.8c-.9.8-2 1.2-3 1.2z" class="st0"/><path d="m8.464 14.687 6.223-6.222.919.919-6.222 6.222z" class="st0"/></svg>`;
const loading = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M12 19.5c-4.1 0-7.5-3.4-7.5-7.5S7.9 4.5 12 4.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5zm0-14.1c-3.6 0-6.6 2.9-6.6 6.6 0 3.6 2.9 6.6 6.6 6.6 3.6 0 6.6-2.9 6.6-6.6 0-3.6-3-6.6-6.6-6.6z" style="fill:%23eeeff2"/><path d="M7 17.4c-.1 0-.2 0-.3-.1C5.3 15.9 4.5 14 4.5 12s.8-3.9 2.2-5.3C8.1 5.3 10 4.5 12 4.5s3.9.8 5.3 2.2c.2.2.2.5 0 .7s-.5.2-.7 0c-1.2-1.2-2.9-1.9-4.6-1.9-1.8 0-3.4.7-4.6 1.9s-2 2.8-2 4.6c0 1.8.7 3.4 1.9 4.6.2.2.2.5 0 .7 0 .1-.2.1-.3.1z"/></svg>`;
const paste = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M4.6 19.1h3.9v-.8H5.3V5.7h1.6v1.6h7.8V5.7h1.6V8h.3l.5.3V4.9h-2.4v-.7h-2.4c0-.9-.7-1.6-1.6-1.6s-1.4.7-1.4 1.6H6.9V5H4.6v14.1zM7.7 4.9H10v-1c0-.3.2-.5.5-.5h.6c.3 0 .5.2.5.5V5H14v1.6H7.7V4.9zm3.1 11h7.1v.8h-7.1v-.8zm-1.5-7v12.5h10.2v-9.7l-2.8-2.8H9.3zm9.4 11.7H10v-11h5.5v3.1h3.1v7.9zm0-8.6h-2.4V9.6h.2l2.1 2.1v.3zm-7.9 1.6h7.1v.8h-7.1v-.8zm0 4.7h5.5v.8h-5.5v-.8z"/></svg>`;
const pivot = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M19.8 3.7H4.2c-.3 0-.5.2-.5.5v15.6c0 .3.2.5.5.5h15.6c.3 0 .5-.2.5-.5V4.2c0-.3-.2-.5-.5-.5zm-.5 3.7H8.6V4.7h10.7v2.7zM7.6 4.7v2.7H4.7V4.7h2.9zM4.7 8.4h2.9v10.9H4.7V8.4zm3.9 10.9V8.4h10.7v10.9H8.6z"/><path d="m15.9 10.3-2.2 1.9.6.8 1.1-1v3.6h-3l1-1.3-.7-.6-2.1 2.3v.1l2 2.2.7-.6-.9-1.1h4V12l1.3 1.1.6-.8-2.4-2z"/></svg>`;
const smallDown = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="m7.8 9.7 4.2 4.6 4.2-4.6z"/></svg>`;
const smallLeft = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M14.3 7.8 9.7 12l4.6 4.2z"/></svg>`;
const smallRight = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="m9.7 16.2 4.6-4.2-4.6-4.2z"/></svg>`;
const smallUp = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M16.2 14.3 12 9.7l-4.2 4.6z"/></svg>`;
const unlinked = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="Layer_1" x="0" y="0" style="enable-background:new 0 0 24 24" version="1.1" viewBox="0 0 24 24"><style>.st0{fill:%23020202}</style><path d="m8.487 14.65 1.768-1.769.92.92-1.768 1.767zM18.3 5.7c-1.6-1.6-4.3-1.6-5.9 0l-1.8 1.8.9.9 1.8-1.8c1.1-1.1 3-1.1 4.1 0 1.1 1.1 1.1 3 0 4.1l-1.8 1.8.9.9 1.8-1.8c1.6-1.6 1.6-4.3 0-5.9z" class="st0"/><path d="M10.8 17.4c-1.1 1.1-3 1.1-4.1 0-1.1-1.1-1.1-3 0-4.1l1.8-1.8-.9-.9-1.8 1.8c-1.6 1.6-1.6 4.3 0 5.9.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 3-1.2l1.8-1.8-.9-.9-1.8 1.8zM5.595 6.483l.92-.92 11.737 11.738-.919.92zM12.937 10.27l1.768-1.768.92.92-1.769 1.767z" class="st0"/></svg>`;
const grip = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 24 24" viewBox="0 0 24 24"><path d="M18 14v1H6v-1h12zm0-5v1H6V9h12z"/></svg>`;

// Map of custom inline SVG icons for AG Grid icons
const agGridCustomSvgIcons: Record<string, string> = {
  aggregation,
  arrows,
  csv,
  cut,
  excel,
  group,
  linked,
  loading,
  paste,
  pivot,
  unlinked,
  grip,
  'color-picker': colorPicker,
  'small-down': smallDown,
  'small-left': smallLeft,
  'small-right': smallRight,
  'small-up': smallUp,
};

// Map of AG Grid icon names to their corresponding PDS icons
const agGridToPdsIconMap: Record<string, IconName> = {
  asc: 'arrow-up',
  cancel: 'close',
  chart: 'chart',
  columns: 'grid',
  contracted: 'arrow-head-right',
  copy: 'copy',
  cross: 'close',
  desc: 'arrow-down',
  down: 'arrow-down',
  expanded: 'arrow-head-left',
  'eye-slash': 'view-off',
  eye: 'view',
  filter: 'filter',
  first: 'arrow-first',
  last: 'arrow-last',
  left: 'arrow-left',
  maximize: 'zoom-out',
  menu: 'menu-lines',
  'menu-alt': 'menu-dots-vertical',
  minimize: 'zoom-in',
  minus: 'minus',
  next: 'arrow-head-right',
  none: 'list',
  'not-allowed': 'disable',
  pin: 'push-pin',
  plus: 'plus',
  previous: 'arrow-head-left',
  right: 'arrow-right',
  save: 'save',
  tick: 'check',
  'tree-closed': 'arrow-head-right',
  'tree-indeterminate': 'minus',
  'tree-open': 'arrow-head-down',
  up: 'arrow-up',
  settings: 'configurate',
};

const pdsToggleButtonStyle = createPart({
  feature: 'pdsToggleButtonStyle',
  modeParams: {
    [PdsThemeMode.LIGHT]: {
      toggleButtonOnBackgroundColor: themeLightNotificationSuccess,
      toggleButtonOffBackgroundColor: themeLightBackgroundBase,
      toggleButtonSwitchBackgroundColor: themeLightPrimary,
    },
    [PdsThemeMode.DARK]: {
      toggleButtonOnBackgroundColor: themeDarkNotificationSuccess,
      toggleButtonOffBackgroundColor: themeDarkBackgroundBase,
      toggleButtonSwitchBackgroundColor: themeDarkPrimary,
    },
  },
  /* Using the checkbox border color CSS variable as a workaround because theme-specific selectors [data-ag-theme-mode="ag-theme-pds"] are not applying correctly due to being wrapped in a generated class. */
  css: `
     --pds-toggle-button-hover-color: color-mix(in srgb, var(--ag-toggle-button-on-background-color) 60%, black);

    .ag-toggle-button-input-wrapper {
      border: ${borderWidthBase} solid var(--ag-checkbox-unchecked-border-color);
    }
    .ag-toggle-button-input-wrapper.ag-checked {
      border-color: var(--ag-toggle-button-on-background-color);
    }
    .ag-toggle-button-input-wrapper:hover {
      border-color: var(--ag-checkbox-checked-background-color) !important;
    }
    .ag-toggle-button-input-wrapper.ag-checked:hover {
      border-color: var(--pds-toggle-button-hover-color) !important;
      background-color: var(--pds-toggle-button-hover-color) !important;
    }

    .ag-toggle-button-input-wrapper::before {
      height: calc(var(--ag-toggle-button-height) - ${spacingStaticXSmall} * 2) !important;
      width: calc(var(--ag-toggle-button-height) - ${spacingStaticXSmall} * 2) !important;
      top: calc(${spacingStaticXSmall} - ${borderWidthBase}) !important;
      left: calc(${spacingStaticXSmall} - ${borderWidthBase}) !important;
    }
    .ag-toggle-button-input-wrapper.ag-checked::before {
      --ag-toggle-button-switch-background-color: ${themeLightBackgroundBase};
      --ag-toggle-button-on-border-color: ${themeLightBackgroundBase};
      left: calc(100% - var(--ag-toggle-button-height) + 6px) !important;
    }
  `,
});

/* This part extends (rather than replaces) the checkboxStyle feature of the Quartz theme to apply PDS-specific styling. */
const pdsCheckboxStyle = createPart({
  feature: 'pdsCheckboxStyle',
  modeParams: {
    [PdsThemeMode.LIGHT]: {
      checkboxCheckedBackgroundColor: themeLightPrimary,
      checkboxCheckedBorderColor: themeLightPrimary,
      checkboxUncheckedBorderColor: themeLightContrastMedium,
      checkboxIndeterminateBorderColor: themeLightContrastMedium,
      checkboxIndeterminateBackgroundColor: themeLightBackgroundBase,
      checkboxIndeterminateShapeColor: themeLightPrimary,
    },
    [PdsThemeMode.DARK]: {
      checkboxCheckedBackgroundColor: themeDarkPrimary,
      checkboxCheckedBorderColor: themeDarkPrimary,
      checkboxUncheckedBorderColor: themeDarkContrastMedium,
      checkboxIndeterminateBorderColor: themeDarkContrastMedium,
      checkboxIndeterminateBackgroundColor: themeDarkBackgroundBase,
      checkboxIndeterminateShapeColor: themeDarkPrimary,
    },
  },
  /* Use color-mixing to approximate hover colors (themeDarkContrastHigh and themeLightContrastHigh) as a workaround since theme-specific selectors [data-ag-theme-mode="ag-theme-pds"] are not applying correctly due to being wrapped in a generated class. */
  css: `
    --pds-checkbox-hover-color: color-mix(in srgb, var(--ag-checkbox-checked-background-color) 60%, gray);

   .ag-checkbox-input-wrapper:hover {
      border-color: var(--ag-checkbox-checked-background-color) !important;
    }

   .ag-checkbox-input-wrapper.ag-checked:hover {
     border-color: var(--pds-checkbox-hover-color) !important;
     background-color: var(--pds-checkbox-hover-color) !important;
   }
  `,
});

// const pdsIconSetPart = createPart({ feature: 'iconSet' });

const pdsSvgIcons = iconOverrides({
  type: 'image',
  mask: true,
  icons: {
    ...Object.fromEntries(
      Object.entries(agGridCustomSvgIcons).map(([key, value]) => [key, { url: svgToDataUrl(value) }])
    ),
    ...Object.fromEntries(
      Object.entries(agGridToPdsIconMap).map(([key, value]) => [key, { url: buildIconUrl(value) }])
    ),
  },
});

export const pdsTheme: Theme = themeQuartz
  .withParams({
    checkboxBorderWidth: 2,
    checkboxBorderRadius: borderRadiusSmall,
    focusShadow: 'none',
    inputFocusShadow: 'none',
    spacing: 10,
    toggleButtonHeight: 28,
    toggleButtonWidth: 48,
    iconSize: 24,
    borderRadius: borderRadiusSmall,
    wrapperBorderRadius: borderRadiusMedium,
    fontFamily: fontFamily,
    fontSize: fontSizeTextSmall,
    headerFontWeight: fontWeightSemiBold,
    headerFontSize: fontSizeTextXSmall,
    headerHeight: 16 + 10 * 2.9, // 'calc(var(--ag-font-size) + var(--ag-grid-size) * 2.9)',
    rowHeight: 16 + 10 * 4, // calc(var(--ag-font-size) + var(--ag-grid-size) * 4),
    checkboxCheckedShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.22,7.47l-1.47-1.42-9.26,9.02-4.24-4.15-1.47,1.42,5.71,5.6,10.73-10.47Z"/></svg>',
    },
    checkboxIndeterminateShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20,11v2H4v-2h16Z"/></svg>',
    },
    toggleButtonSwitchInset: 3,
  })
  .withParams(
    {
      browserColorScheme: 'dark',
      accentColor: themeDarkNotificationInfo,
      backgroundColor: themeDarkBackgroundBase,
      foregroundColor: themeDarkPrimary,
      headerBackgroundColor: themeDarkBackgroundSurface,
      // TODO: PDS Sass variable missing
      selectedRowBackgroundColor: '#040405',
      oddRowBackgroundColor: themeDarkBackgroundSurface,
      modalOverlayBackgroundColor: themeDarkBackgroundFrosted,
      rowHoverColor: themeDarkStateHover,
      columnHoverColor: themeDarkStateHover,
      rangeSelectionBorderColor: themeDarkStateFocus,
      borderColor: themeDarkContrastLow,
      inputBorder: `1px solid ${themeDarkContrastMedium}`,
      inputInvalidBorder: `1px solid ${themeDarkNotificationError}`,
      inputDisabledBorder: `1px solid ${themeDarkStateDisabled}`,
      inputDisabledBackgroundColor: themeDarkBackgroundBase,
      invalidColor: themeDarkNotificationError,
      inputFocusBorder: `1px solid ${themeDarkPrimary}`,
    },
    PdsThemeMode.DARK
  )
  .withParams(
    {
      browserColorScheme: 'light',
      accentColor: themeLightNotificationInfo,
      backgroundColor: themeLightBackgroundBase,
      foregroundColor: themeLightPrimary,
      headerBackgroundColor: themeLightBackgroundSurface,
      // TODO: PDS Sass variable missing
      selectedRowBackgroundColor: '#cbced7',
      oddRowBackgroundColor: themeLightBackgroundSurface,
      modalOverlayBackgroundColor: themeLightBackgroundFrosted,
      rowHoverColor: themeLightStateHover,
      columnHoverColor: themeLightStateHover,
      rangeSelectionBorderColor: themeLightStateFocus,
      borderColor: themeLightContrastLow,
      inputBorder: `1px solid ${themeLightContrastMedium}`,
      inputInvalidBorder: `1px solid ${themeLightNotificationError}`,
      inputDisabledBorder: `1px solid ${themeLightStateDisabled}`,
      inputDisabledBackgroundColor: themeLightBackgroundBase,
      invalidColor: themeLightNotificationError,
      inputFocusBorder: `1px solid ${themeLightPrimary}`,
    },
    PdsThemeMode.LIGHT
  )
  .withPart(pdsSvgIcons)
  .withPart(pdsToggleButtonStyle)
  .withPart(pdsCheckboxStyle);
