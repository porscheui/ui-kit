// common type definitions
import type { IconName } from '@porsche-design-system/icons';
import type { BreakpointCustomizable } from './utils';

export type { TextSize } from './components/basic/typography/text/text-utils';
export type { HeadlineVariant, VariantType } from './components/basic/typography/headline/headline-utils';

export const TEXT_WEIGHTS = ['thin', 'regular', 'semibold', 'bold'] as const;
export type TextWeight = typeof TEXT_WEIGHTS[number];

export const TEXT_COLORS = [
  'brand',
  'default',
  'neutral-contrast-high',
  'neutral-contrast-medium',
  'neutral-contrast-low',
  'notification-success',
  'notification-warning',
  'notification-error',
  'notification-neutral',
  'inherit',
] as const;
export type TextColor = typeof TEXT_COLORS[number];

export const TEXT_ALIGNS = ['left', 'center', 'right'] as const;
export type TextAlign = typeof TEXT_ALIGNS[number];

export const THEMES = ['light', 'dark'] as const;
export type Theme = typeof THEMES[number];
export const THEMES_EXTENDED_ELECTRIC = [...THEMES, 'light-electric'] as const;
export type ThemeExtendedElectric = typeof THEMES_EXTENDED_ELECTRIC[number];
export const THEMES_EXTENDED_ELECTRIC_DARK = [...THEMES_EXTENDED_ELECTRIC, 'dark-electric'] as const;
export type ThemeExtendedElectricDark = typeof THEMES_EXTENDED_ELECTRIC_DARK[number];

export type { IconName } from '@porsche-design-system/icons';
export const ICON_SIZES = ['small', 'medium', 'large', 'inherit'] as const;
export type IconSize = typeof ICON_SIZES[number];

export type LinkButtonPureIconName = IconName | 'none';
export const LINK_BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary'] as const;
export type LinkButtonVariant = typeof LINK_BUTTON_VARIANTS[number];

export type ButtonVariant = LinkButtonVariant;
export const BUTTON_TYPES = ['button', 'submit', 'reset'] as const;
export type ButtonType = typeof BUTTON_TYPES[number];

export type LinkVariant = LinkButtonVariant;
// TODO: string type got removed here?
export const LINK_TARGETS = ['_self', '_blank', '_parent', '_top'] as const;
export type LinkTarget = typeof LINK_TARGETS[number];

export const FORM_STATES = ['none', 'error', 'success'] as const;
export type FormState = typeof FORM_STATES[number];

// BreakpointCustomizable Types
export type { BreakpointKey, BreakpointValues, BreakpointCustomizable } from './utils/breakpoint-customizable';

// ROLLUP_REPLACE_IS_STAGING will be provided via webpack
declare global {
  const ROLLUP_REPLACE_IS_STAGING: string;
}

export const ALIGN_LABELS = ['left', 'right'] as const;
export type AlignLabelType = typeof ALIGN_LABELS[number];
export type AlignLabel = BreakpointCustomizable<AlignLabelType>;

import type { AriaAttributes } from './aria-types';
export type { AriaAttributes } from './aria-types';

export type SelectedAriaAttributes<T extends keyof AriaAttributes> = Pick<AriaAttributes, T> | string;
