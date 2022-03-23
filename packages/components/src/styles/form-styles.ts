import type { JssStyle, Styles } from 'jss';
import type { BreakpointCustomizable } from '../utils';
import { buildResponsiveStyles, isThemeDark } from '../utils';
import type { FormState, Theme } from '../types';
import {
  addImportantToRule,
  getFormTextHiddenJssStyle,
  getInset,
  getThemedColors,
  getTransition,
  pxToRemWithUnit,
} from './';
import { textSmall } from '@porsche-design-system/utilities-v2';
import { isVisibleFormState } from '../utils/form-state';
import { getThemedFormStateColors } from './form-state-color-styles';

const { disabledColor: lightThemeDisabledColor } = getThemedColors('light');

export const INPUT_HEIGHT = 48;

export type ChildSelector = 'input' | 'select' | 'textarea';

export const getBaseChildStyles = (
  child: ChildSelector,
  state: FormState,
  theme: Theme,
  additionalDefaultJssStyle?: JssStyle
): Styles => {
  const { baseColor, backgroundColor, contrastHighColor, contrastMediumColor } = getThemedColors(theme);
  const { formStateColor, formStateHoverColor } = getThemedFormStateColors(theme, state);
  const hasVisibleState = isVisibleFormState(state);

  // TODO: Add readonly color to utilities package
  const readonly = '#ebebeb'; // 🤷

  return {
    [`::slotted(${child})`]: {
      display: 'block',
      position: 'relative',
      ...getInset(),
      width: '100%',
      ...(child !== 'textarea' && { height: pxToRemWithUnit(INPUT_HEIGHT) }),
      margin: 0,
      outline: '1px solid transparent',
      outlineOffset: '2px',
      WebkitAppearance: 'none', // iOS safari
      appearance: 'none',
      boxSizing: 'border-box',
      border: hasVisibleState ? `2px solid ${formStateColor}` : `1px solid ${contrastMediumColor}`,
      borderRadius: 0,
      backgroundColor,
      opacity: 1,
      ...textSmall,
      overflowWrap: null,
      hyphens: null,
      textIndent: 0,
      color: baseColor,
      transition: ['color', 'border-color', 'background-color'].map(getTransition).join(','),
      ...additionalDefaultJssStyle,
    },
    [`::slotted(${child}:hover)`]: {
      borderColor: formStateHoverColor || (isThemeDark(theme) ? contrastHighColor : baseColor),
    },
    [`::slotted(${child}:focus)`]: {
      outlineColor: formStateColor || contrastMediumColor,
    },
    [`::slotted(${child}:disabled)`]: {
      cursor: 'not-allowed',
      color: lightThemeDisabledColor, // 🤷 no theming here
      borderColor: lightThemeDisabledColor, // 🤷 no theming here
      WebkitTextFillColor: lightThemeDisabledColor, // 🤷 no theming here; fix placeholder color bug in Safari
    },
    ...(child !== 'select' && {
      [`::slotted(${child}[readonly])`]: {
        borderColor: readonly,
        backgroundColor: readonly,
      },
      [`::slotted(${child}[readonly]:focus)`]: {
        outlineColor: 'transparent',
      },
      [`::slotted(${child}[readonly]:not(:disabled))`]: {
        color: contrastMediumColor,
      },
    }),
  };
};

export const getLabelStyles = (
  child: ChildSelector,
  isDisabled: boolean,
  hideLabel: BreakpointCustomizable<boolean>,
  state: FormState,
  theme: Theme,
  counterOrUnitOrIconStyles?: Styles<'counter'> | Styles<'unit'> | Styles<'icon'>
): Styles => {
  const { baseColor, contrastMediumColor, disabledColor } = getThemedColors(theme);
  const { formStateHoverColor } = getThemedFormStateColors(theme, state);
  const hasVisibleState = isVisibleFormState(state);

  // jss prefers flat and simple selectors, therefore we reuse properties
  const labelTextHoverJssStyle: JssStyle = {
    '&:hover': {
      [`&~::slotted(${child}:not(:disabled):not([readonly]))` +
      (hasVisibleState ? `,::slotted(${child}:hover:not(:disabled):not([readonly]))` : '')]: {
        borderColor: addImportantToRule(hasVisibleState ? formStateHoverColor : baseColor),
      },
    },
  };

  const counterOrUnitOrIconStylesKey = counterOrUnitOrIconStyles && Object.keys(counterOrUnitOrIconStyles)[0];

  return {
    label: {
      display: 'block',
      position: 'relative', // for unit and counter
      '&__text': {
        ...buildResponsiveStyles(hideLabel, getFormTextHiddenJssStyle),
        display: 'block',
        color: isDisabled ? disabledColor : baseColor,
        width: 'fit-content',
        transition: getTransition('color'),
        '&+&--description': {
          marginTop: pxToRemWithUnit(-4),
          paddingBottom: pxToRemWithUnit(8),
        },
        '&--description': {
          color: isDisabled ? disabledColor : contrastMediumColor,
        },
        ...labelTextHoverJssStyle,
      },
    },
    ...(counterOrUnitOrIconStyles && {
      [counterOrUnitOrIconStylesKey]: {
        ...counterOrUnitOrIconStyles[counterOrUnitOrIconStylesKey],
        ...(isDisabled && {
          color: disabledColor,
          cursor: 'not-allowed',
        }),
        ...labelTextHoverJssStyle,
      },
    }),
  };
};
