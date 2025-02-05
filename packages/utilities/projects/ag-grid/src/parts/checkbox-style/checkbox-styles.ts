import {
  themeDarkBackgroundBase,
  themeDarkContrastHigh,
  themeDarkContrastMedium,
  themeDarkPrimary,
  themeLightBackgroundBase,
  themeLightContrastHigh,
  themeLightContrastMedium,
  themeLightPrimary,
} from '@porsche-design-system/components-js/styles';
import { createPart } from 'ag-grid-community';
import { checkboxCheckedShapeImage, checkboxIndeterminateShapeImage } from '../../icons';
import { PdsThemeMode } from '../../types/theme-mode';

export const checkboxStyle = createPart({
  feature: 'checkboxStyle',
  params: {
    /** Background color of an unchecked checkbox */
    checkboxUncheckedBackgroundColor: { ref: 'backgroundColor' },

    /** The color of the check mark on checked checkboxes. */
    checkboxCheckedShapeColor: { ref: 'backgroundColor' },

    /** An image defining the shape of the check mark on checked checkboxes. */
    checkboxCheckedShapeImage: { svg: checkboxCheckedShapeImage },

    /** An image defining the shape of the dash mark on indeterminate checkboxes */
    checkboxIndeterminateShapeImage: { svg: checkboxIndeterminateShapeImage },

    /** Background color of a checked checkbox */
    checkboxCheckedBackgroundColor: themeLightPrimary,

    /** Border color of a checked checkbox */
    checkboxCheckedBorderColor: themeLightPrimary,

    /** Border color of an unchecked checkbox */
    checkboxUncheckedBorderColor: themeLightContrastMedium,

    /** Border color of an indeterminate checkbox */
    checkboxIndeterminateBorderColor: themeLightContrastMedium,

    /** Background color of an indeterminate checkbox */
    checkboxIndeterminateBackgroundColor: themeLightBackgroundBase,

    /** The color of the dash mark on indeterminate checkboxes */
    checkboxIndeterminateShapeColor: themeLightPrimary,

    checkboxUncheckedHoverBorderColor: themeLightPrimary,
    checkboxCheckedHoverBorderColor: themeLightContrastHigh,
    checkboxCheckedHoverBackgroundColor: themeLightContrastHigh,
  },
  modeParams: {
    [PdsThemeMode.DARK]: {
      checkboxUncheckedBackgroundColor: { ref: 'backgroundColor' },
      checkboxCheckedShapeColor: { ref: 'backgroundColor' },
      checkboxCheckedShapeImage: { svg: checkboxCheckedShapeImage },
      checkboxIndeterminateShapeImage: { svg: checkboxIndeterminateShapeImage },
      checkboxCheckedBackgroundColor: themeDarkPrimary,
      checkboxCheckedBorderColor: themeDarkPrimary,
      checkboxUncheckedBorderColor: themeDarkContrastMedium,
      checkboxIndeterminateBorderColor: themeDarkContrastMedium,
      checkboxIndeterminateBackgroundColor: themeDarkBackgroundBase,
      checkboxIndeterminateShapeColor: themeDarkPrimary,
      checkboxUncheckedHoverBorderColor: themeDarkPrimary,
      checkboxCheckedHoverBorderColor: themeDarkContrastHigh,
      checkboxCheckedHoverBackgroundColor: themeDarkContrastHigh,
    },
  },
  css: `
    .ag-checkbox-input-wrapper,
    .ag-radio-button-input-wrapper {
        flex: none;
        position: relative;
        width: var(--ag-icon-size);
        height: var(--ag-icon-size);
        background-color: var(--ag-checkbox-unchecked-background-color);
        border: solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);

        :where(input) {
            cursor: pointer;
            appearance: none;
            opacity: 0;
            margin: 0;
            display: block;
            width: var(--ag-icon-size);
            height: var(--ag-icon-size);
        }

        &::after {
            content: '';
            position: absolute;
            display: block;
            inset: 0;
            mask-position: center;
            mask-repeat: no-repeat;
            pointer-events: none;
        }

        &:where(.ag-checked) {
            background-color: var(--ag-checkbox-checked-background-color);
            border-color: var(--ag-checkbox-checked-border-color);

            &::after {
                background-color: var(--ag-checkbox-checked-shape-color);
            }
        }

        &:where(:focus-within, :active) {
            box-shadow: var(--ag-focus-shadow);
        }

        &:where(.ag-disabled) {
            opacity: 0.5;
            filter: grayscale();
        }
    }

    .ag-checkbox-input-wrapper {
        border-radius: var(--ag-checkbox-border-radius);

        &:where(.ag-checked)::after {
            mask-image: var(--ag-checkbox-checked-shape-image);
        }

        &:where(.ag-indeterminate) {
            background-color: var(--ag-checkbox-indeterminate-background-color);
            border-color: var(--ag-checkbox-indeterminate-border-color);

            &::after {
                background-color: var(--ag-checkbox-indeterminate-shape-color);
                mask-image: var(--ag-checkbox-indeterminate-shape-image);
            }
        }
    }

    .ag-checkbox-input-wrapper:hover {
        border-color: var(--ag-checkbox-unchecked-hover-border-color) !important;
    }

    .ag-checkbox-input-wrapper.ag-checked:hover {
        border-color: var(--ag-checkbox-checked-hover-border-color) !important;
        background-color: var(--ag-checkbox-checked-hover-background-color) !important;
    }
  `,
});
