import { getMinifiedCss } from '@porsche-design-system/shared-src/src/styles/getMinifiedCss';
import {
  BUTTON_LINK_SKELETON_WIDTH,
  ELEMENT_SKELETON_DIMENSION,
  extendPseudoWithTheme,
  getBaseSkeletonStyle,
  getThemedPseudoStyle,
  PDS_SKELETON_CLASS_PREFIX,
} from './';
import { pxToRemWithUnit } from '../common-styles';

export const getButtonLinkSkeletonCss = (): string => {
  return getMinifiedCss({
    '@global': {
      'p-button, p-link': {
        '&:not(.hydrated)': {
          ...extendPseudoWithTheme({ stylesFunction: () => getBaseSkeletonStyle(false) }),
          display: 'inline-flex',
          minWidth: pxToRemWithUnit(BUTTON_LINK_SKELETON_WIDTH),
          [`&[hide-label=true], &.${PDS_SKELETON_CLASS_PREFIX}hide-label`]: {
            minWidth: pxToRemWithUnit(ELEMENT_SKELETON_DIMENSION),
          },
          ...getThemedPseudoStyle(),
        },
      },
    },
  });
};
