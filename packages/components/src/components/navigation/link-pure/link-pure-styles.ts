import {
  addImportantToRule,
  attachCss,
  buildResponsiveHostStyles,
  buildResponsiveStyles,
  buildSlottedStyles,
  getCss,
  getFocusSlottedPseudoStyles,
  getFocusStyles,
  hasVisibleIcon,
  insertSlottedStyles,
  isDark,
  paramCaseToCamelCase,
  pxToRemWithUnit,
  transitionDuration,
  transitionTimingFunction,
} from '../../../utils';
import type { BreakpointCustomizable, GetStylesFunction, JssStyle } from '../../../utils';
import {
  calculateLineHeight,
  color,
  font,
  FontSizeLineHeight,
  generateTypeScale,
  srOnly,
} from '@porsche-design-system/utilities';
import type { AlignLabel, LinkButtonPureIconName, TextSize, Theme } from '../../../types';
import { isSizeInherit } from '../../basic/typography/text/text-utils';

const getColors = (isDarkTheme: boolean): { baseColor: string; hoverColor: string; activeColor: string } => {
  const {
    default: baseColor,
    state: { hover, active },
  } = isDarkTheme ? color.darkTheme : color;
  return {
    baseColor,
    hoverColor: hover,
    activeColor: active,
  };
};

const getHostStyles: GetStylesFunction = (stretch: BreakpointCustomizable<boolean>): JssStyle => ({
  position: addImportantToRule('relative'),
  cursor: addImportantToRule('pointer'),
  display: addImportantToRule(stretch ? 'block' : 'inline-block'),
  ...(!stretch && { verticalAlign: 'top' }),
});

const getPseudoAndSublineSize = (textSize: TextSize, fontSize: string, marginLeft: string): JssStyle => {
  const pseudoElement: JssStyle = {
    '&::before': {
      fontSize,
      marginLeft,
    },
  };

  const sublineSize: { [key in Exclude<TextSize, 'inherit'>]: FontSizeLineHeight } = {
    'x-small': {
      ...font.size.xSmall,
    },
    small: {
      ...font.size.small,
    },
    medium: {
      ...font.size['20'],
    },
    large: {
      ...font.size['30'],
    },
    'x-large': {
      ...font.size.large,
    },
  };

  return {
    ...sublineSize[textSize],
    ...pseudoElement,
  };
};

const getSizeStyles = (textSize: TextSize): JssStyle => {
  if (isSizeInherit(textSize)) {
    return {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      '& .icon': {
        width: '1.5em',
        height: '1.5em',
      },
    };
  } else {
    const { fontSize } = font.size[paramCaseToCamelCase(textSize)];
    const lineHeight = `${calculateLineHeight(fontSize)}em`;

    return {
      ...generateTypeScale(fontSize),
      '& .icon': {
        width: lineHeight,
        height: lineHeight,
      },
      '& ~ .subline': getPseudoAndSublineSize(textSize, fontSize, lineHeight),
    };
  }
};

const getStretchStyles: GetStylesFunction = (stretch: BreakpointCustomizable<boolean>): JssStyle => {
  return {
    justifyContent: stretch ? 'space-between' : 'flex-start',
  };
};

const getVisibilityStyles = (hideLabel: boolean): JssStyle => {
  return hideLabel
    ? srOnly()
    : {
        position: 'static',
        width: 'auto',
        height: 'auto',
        margin: 0,
        whiteSpace: 'inherit',
        overflow: 'visible',
        clip: 'auto',
        clipPath: 'none',
      };
};

/* Needed for slotted anchor and hidden label, which then enlarges the hidden label to equal host size and indents the text to be visually hidden. */
const getSlottedAnchorVisibilityStyles = (hideLabel: boolean): JssStyle => {
  return hideLabel
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        whiteSpace: 'nowrap',
        textIndent: -999999,
      }
    : {
        position: 'static',
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        whiteSpace: 'inherit',
        textIndent: 0,
      };
};

const getLabelAlignmentStyles = (alignLabel: AlignLabel): JssStyle => {
  return alignLabel === 'left'
    ? {
        padding: `0 ${pxToRemWithUnit(4)} 0 0`,
        order: -1,
      }
    : {
        padding: `0 0 0 ${pxToRemWithUnit(4)}`,
        order: 0,
      };
};

export const getComponentCss = (
  icon: LinkButtonPureIconName,
  active: boolean,
  stretch: BreakpointCustomizable<boolean>,
  size: BreakpointCustomizable<TextSize>,
  hideLabel: BreakpointCustomizable<boolean>,
  alignLabel: AlignLabel,
  hasSubline: boolean,
  hasHref: boolean,
  theme: Theme
): string => {
  const isDarkTheme = isDark(theme);
  const { baseColor, hoverColor, activeColor } = getColors(isDarkTheme);
  const hasIcon = hasVisibleIcon(icon);

  return getCss({
    ...buildResponsiveHostStyles(hasSubline ? false : stretch, getHostStyles),
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      outline: 'transparent none',
      appearance: 'none',
      border: 'none',
      textDecoration: 'none',
      textAlign: 'left',
      background: 'transparent',
      color: active ? activeColor : baseColor,
      transition: `color ${transitionDuration} ${transitionTimingFunction}, font-size 1ms linear`, // used for transitionend event listener
      ...(hasHref && getFocusStyles({ offset: 1, pseudo: '::before' })),
      '&:hover': {
        color: hoverColor,
        ...(hasSubline && {
          '& + $subline': {
            color: hoverColor,
          },
        }),
      },
      '&:active': {
        color: activeColor,
        ...(hasSubline && {
          '& + $subline': {
            color: activeColor,
          },
        }),
      },
      ...(!hasSubline && buildResponsiveStyles(stretch, getStretchStyles)),
      ...buildResponsiveStyles(size, getSizeStyles),
    },
    ...(hasIcon && {
      icon: {
        flexShrink: '0',
        width: '1.5em',
        height: '1.5em',
      },
      label: {
        ...buildResponsiveStyles(hideLabel, hasHref ? getVisibilityStyles : getSlottedAnchorVisibilityStyles),
        ...(!hasSubline && buildResponsiveStyles(alignLabel, getLabelAlignmentStyles)),
        ...((hasSubline || alignLabel === 'right') && {
          paddingLeft: addImportantToRule(pxToRemWithUnit(4)),
        }),
      },
    }),
    ...(hasSubline && {
      subline: {
        display: 'flex',
        transition: `color ${transitionDuration} ${transitionTimingFunction}`,
        marginTop: addImportantToRule('4px'),
        color: active ? activeColor : baseColor,
        ...(hasIcon && {
          ...buildResponsiveStyles(hideLabel, getVisibilityStyles),
          paddingLeft: addImportantToRule(pxToRemWithUnit(4)),
          '&::before': {
            content: '""',
          },
        }),
      },
    }),
    // TODO: I guess it's defined because of CMS output. But as soon as we can use something like `::slotted(a)::before` it won't work anymore anyway. Maybe we should remove it and the integrating team needs to fix their output?
    '::slotted(p)': {
      margin: 0,
    },
  });
};

export const addComponentCss = (
  host: HTMLElement,
  icon: LinkButtonPureIconName,
  active: boolean,
  stretch: BreakpointCustomizable<boolean>,
  size: BreakpointCustomizable<TextSize>,
  hideLabel: BreakpointCustomizable<boolean>,
  alignLabel: AlignLabel,
  hasSubline: boolean,
  hasHref: boolean,
  theme: Theme
): void => {
  attachCss(host, getComponentCss(icon, active, stretch, size, hideLabel, alignLabel, hasSubline, hasHref, theme));
};

export const getSlottedCss = (host: HTMLElement): string => {
  return getCss(buildSlottedStyles(host, getFocusSlottedPseudoStyles({ offset: 1 })));
};

export const addSlottedCss = (host: HTMLElement): void => {
  insertSlottedStyles(host, getSlottedCss(host));
};
