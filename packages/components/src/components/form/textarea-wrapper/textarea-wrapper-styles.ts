import type { Styles } from 'jss';
import type { BreakpointCustomizable } from '../../../utils';
import { buildSlottedStyles, getCss, isVisibleFormState, mergeDeep } from '../../../utils';
import type { FormState, Theme } from '../../../types';
import { addImportantToEachRule, getBaseSlottedStyles, getThemedColors, pxToRemWithUnit } from '../../../styles';
import { getBaseChildStyles, getLabelStyles } from '../../../styles/form-styles';
import { getFunctionalComponentRequiredStyles } from '../../common/required/required-styles';
import { getFunctionalComponentStateMessageStyles } from '../../common/state-message/state-message-styles';
import { getScreenReaderOnlyJssStyle } from '@porsche-design-system/utilities-v2';

export const getComponentCss = (
  isDisabled: boolean,
  hideLabel: BreakpointCustomizable<boolean>,
  state: FormState,
  hasCounter: boolean
): string => {
  const theme: Theme = 'light';
  const hasVisibleState = isVisibleFormState(state);
  const { contrastMediumColor } = getThemedColors(theme);
  const defaultPadding = pxToRemWithUnit(hasVisibleState ? 10 : 11);

  return getCss({
    '@global': {
      ':host': {
        display: 'block',
      },
      ...mergeDeep(
        addImportantToEachRule(
          getBaseChildStyles('textarea', state, theme, {
            // 36 = 2 * 6 + 24 where 6 is the bottom distance and 24 the height of the text
            padding: hasCounter ? [defaultPadding, defaultPadding, pxToRemWithUnit(36)].join(' ') : defaultPadding,
            resize: 'vertical',
          })
        ),
        {
          '::slotted(textarea)': {
            minHeight: pxToRemWithUnit(192), // min-height should be overridable
          },
        } as Styles
      ),
    },
    ...getLabelStyles(
      'textarea',
      isDisabled,
      hideLabel,
      state,
      theme,
      hasCounter && {
        counter: {
          position: 'absolute',
          bottom: pxToRemWithUnit(6),
          right: pxToRemWithUnit(12),
          zIndex: 1,
          color: contrastMediumColor,
        },
      }
    ),
    ...getFunctionalComponentRequiredStyles(theme),
    ...getFunctionalComponentStateMessageStyles(theme, state),
    ...(hasCounter && {
      'sr-only': {
        ...getScreenReaderOnlyJssStyle(),
        padding: 0,
      },
    }),
  });
};

export const getSlottedCss = (host: HTMLElement): string => {
  return getCss(buildSlottedStyles(host, getBaseSlottedStyles()));
};
