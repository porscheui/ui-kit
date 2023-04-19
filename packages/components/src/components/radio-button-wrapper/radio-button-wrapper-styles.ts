import type { BreakpointCustomizable, Theme } from '../../types';
import { addImportantToEachRule, getHighContrastColors, getThemedColors } from '../../styles';
import { getCheckboxRadioJssStyle } from '../../styles/checkbox-radio-styles';
import { getCss, isHighContrastMode, mergeDeep } from '../../utils';
import type { FormState } from '../../utils/form/form-state';
import { getInlineSVGBackgroundImage } from '../../utils/svg/getInlineSVGBackgroundImage';

export const getComponentCss = (
  hideLabel: BreakpointCustomizable<boolean>,
  state: FormState,
  isDisabled: boolean,
  theme: Theme
): string => {
  const checkedIconColor = getThemedColors(theme === 'light' ? 'dark' : 'light').primaryColor.replace(/#/g, '%23');
  const { canvasColor } = getHighContrastColors();

  return getCss(
    mergeDeep(getCheckboxRadioJssStyle(hideLabel, state, isDisabled, theme), {
      '@global': {
        '::slotted': addImportantToEachRule({
          '&(input)': {
            borderRadius: '50%',
          },
          '&(input:checked)': {
            backgroundImage: getInlineSVGBackgroundImage(
              `<circle fill="${isHighContrastMode ? canvasColor : checkedIconColor}" cx="12" cy="12" r="6"/>`
            ),
          },
          ...(!isDisabled && {
            '&(input:focus)::before': {
              borderRadius: '50%',
            },
          }),
        }),
      },
    })
  );
};
