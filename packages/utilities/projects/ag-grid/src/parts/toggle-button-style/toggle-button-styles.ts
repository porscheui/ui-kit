import {
  borderWidthBase,
  spacingStaticXSmall,
  themeDarkBackgroundBase,
  themeDarkContrastMedium,
  themeDarkNotificationSuccess,
  themeDarkPrimary,
  themeLightBackgroundBase,
  themeLightContrastMedium,
  themeLightNotificationSuccess,
  themeLightPrimary,
} from '@porsche-design-system/components-js/styles';

import { createPart } from 'ag-grid-community';
import { PdsThemeMode } from '../../types/theme-mode';

export const pdsToggleButtonStyle = createPart({
  feature: 'pdsToggleButtonStyle',
  params: {
    toggleButtonOnBackgroundColor: themeLightNotificationSuccess,
    toggleButtonOffBackgroundColor: themeLightBackgroundBase,
    toggleButtonSwitchBackgroundColor: themeLightPrimary,

    toggleButtonOnHoverBackgroundColor: '#0E4809', // successColorDarken
    toggleButtonOnBorderColor: themeLightNotificationSuccess,
    toggleButtonOnHoverBorderColor: '#0E4809', // successColorDarken
    toggleButtonOffHoverBorderColor: themeLightPrimary,
    toggleButtonOffBorderColor: themeLightContrastMedium,
  },
  modeParams: {
    [PdsThemeMode.DARK]: {
      toggleButtonOnBackgroundColor: themeDarkNotificationSuccess,
      toggleButtonOffBackgroundColor: themeDarkBackgroundBase,
      toggleButtonSwitchBackgroundColor: themeDarkPrimary,

      toggleButtonOnHoverBackgroundColor: '#069561', // successColorDarken
      toggleButtonOnBorderColor: themeDarkNotificationSuccess,
      toggleButtonOnHoverBorderColor: '#069561', // successColorDarken
      toggleButtonOffHoverBorderColor: themeDarkPrimary,
      toggleButtonOffBorderColor: themeDarkContrastMedium,
    },
  },
  css: `
    .ag-toggle-button-input-wrapper {
      border: ${borderWidthBase} solid var(--ag-toggle-button-off-border-color);
    }
    .ag-toggle-button-input-wrapper.ag-checked {
      border-color: var(--ag-toggle-button-on-border-color);
    }
    .ag-toggle-button-input-wrapper:hover {
      border-color: var(--ag-toggle-button-off-hover-border-color) !important;
    }
    .ag-toggle-button-input-wrapper.ag-checked:hover {
      border-color: var(--ag-toggle-button-on-hover-border-color) !important;
      background-color: var(--ag-toggle-button-on-hover-background-color) !important;
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
