import {
  buildResponsiveStyles,
  getCss,
  getFocusStyles,
  getThemedColors,
  getTransition,
  pxToRemWithUnit,
  transitionDuration,
} from '../../../utils';
import type { BreakpointCustomizable } from '../../../utils';
import type { ThemeExtendedElectric } from '../../../types';
import type { AccordionSize } from './accordion-utils';
import { fontFamily, fontWeight, fontSize, spacing } from '@porsche-design-system/utilities';

export const getComponentCss = (
  size: BreakpointCustomizable<AccordionSize>,
  compact: boolean,
  open: boolean,
  theme: ThemeExtendedElectric
): string => {
  const { baseColor, hoverColor, focusColor, contrastLowColor } = getThemedColors(theme);
  const border = `1px solid ${contrastLowColor}`;

  return getCss({
    ':host': {
      display: 'block',
    },
    '@global': {
      button: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: `${pxToRemWithUnit(4)} 0`,
        width: '100%',
        textDecoration: 'none',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        transition: getTransition('color'),
        overflow: 'hidden', // fixes rotating icon to increase bounding box of focus outline in firefox
        textAlign: 'left',
        color: baseColor,
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        hyphens: 'auto',
        fontFamily,
        fontWeight: fontWeight.semibold,
        ...fontSize.small,
        ...(compact
          ? { padding: `${pxToRemWithUnit(4)} 0` }
          : buildResponsiveStyles(size, (s: AccordionSize) => ({
              ...fontSize[s],
              padding: `${pxToRemWithUnit(s === 'medium' ? 20 : 12)} 0`,
            }))),
        ...getFocusStyles({ color: focusColor }),
        '&:hover': {
          color: hoverColor,
        },
      },
    },
    ...(!compact && {
      ':host(:first-of-type) .root': {
        borderTop: border,
      },
      root: {
        borderBottom: border,
      },
    }),
    heading: {
      margin: 0,
      padding: 0,
    },
    icon: {
      width: '1.5em',
      height: '1.5em',
      marginLeft: spacing[24],
      transformOrigin: '50% 50%',
      transform: open ? 'rotate3d(0,0,1,180deg)' : 'rotate3d(0,0,1,0.0001deg)', // needs to be a little bit more than 0 for correct direction in safari
      transition: getTransition('transform'),
    },
    collapsible: {
      padding: 0,
      overflow: 'hidden',
      ...(open
        ? {
            height: 'auto',
            paddingBottom: spacing[compact ? 8 : 40],
            visibility: 'visible',
            transition: getTransition('height') + `,visibility ${transitionDuration}`,
            animation: `$open ${transitionDuration} ease forwards`,
          }
        : {
            height: 0,
            visibility: 'hidden',
            transition: getTransition('height') + `,visibility ${transitionDuration} linear ${transitionDuration}`,
          }),
    },
    '@keyframes open': {
      '0%,99%': {
        overflow: 'hidden',
      },
      '100%': {
        overflow: 'visible',
      },
    },
  });
};
