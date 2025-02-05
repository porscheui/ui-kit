import {
  borderRadiusMedium,
  borderRadiusSmall,
  fontFamily,
  fontSizeTextSmall,
  fontSizeTextXSmall,
  fontWeightSemiBold,
  themeDarkBackgroundBase,
  themeDarkBackgroundFrosted,
  themeDarkBackgroundSurface,
  themeDarkContrastLow,
  themeDarkContrastMedium,
  themeDarkNotificationError,
  themeDarkNotificationInfo,
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
  themeLightPrimary,
  themeLightStateDisabled,
  themeLightStateFocus,
  themeLightStateHover,
} from '@porsche-design-system/components-js/styles';

import { type Theme, themeQuartz } from 'ag-grid-community';

// TODO Hover color for Checkbox, Toggle Button etc. missing
// TODO Radio button styles missing
// TODO Disabled styles missing (toggle, checkbox etc.)
// TODO update focus glow for inputs

import { checkboxStyle } from '../parts/checkbox-style/checkbox-styles';
import { pdsSvgIcons } from '../parts/icon-set/icon-set';
import { pdsToggleButtonStyle } from '../parts/toggle-button-style/toggle-button-styles';
import { PdsThemeMode } from '../types/theme-mode';

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
    headerHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 2.9)',
    rowHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 4)',
    toggleButtonSwitchInset: 3,
  })
  .withParams({
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

  .withPart(pdsSvgIcons)
  .withPart(pdsToggleButtonStyle)
  .withPart(checkboxStyle);
