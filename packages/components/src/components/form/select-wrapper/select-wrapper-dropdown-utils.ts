import type { AriaAttributes } from 'react';
import type { DropdownDirection, DropdownDirectionInternal, OptionMap } from './select-wrapper-utils';
import { getHighlightedOptionMapIndex } from './select-wrapper-utils';
import {
  addImportantToEachRule,
  attachCss,
  buildHostStyles,
  getCss,
  getHTMLElements,
  getScreenReaderJssStyle,
  isDark,
  pxToRemWithUnit,
  transitionDuration,
  transitionTimingFunction,
} from '../../../utils';
import type { Theme } from '../../../types';
import { color, font } from '@porsche-design-system/utilities';

export const getRootAriaAttributes = (optionMaps: OptionMap[], hidden: boolean, filter: boolean): AriaAttributes => ({
  'aria-activedescendant': !filter && `option-${getHighlightedOptionMapIndex(optionMaps)}`,
  'aria-expanded': !filter && !hidden,
});

export const getOptionAriaAttributes = ({
  value,
  highlighted,
  hidden,
  disabled,
  initiallyHidden,
}: OptionMap): AriaAttributes => ({
  'aria-selected': highlighted ? 'true' : null,
  'aria-disabled': disabled ? 'true' : null,
  'aria-hidden': hidden || initiallyHidden ? 'true' : null,
  'aria-label': !value ? 'Empty value' : null,
});

const OPTION_HEIGHT = 24; // opgroups are higher and ignored
const SELECT_HEIGHT = 48;
const MAX_CHILDREN = 10;

export const determineDropdownDirection = (host: HTMLElement): DropdownDirectionInternal => {
  const { length } = getHTMLElements(host.shadowRoot, '.option:not([aria-hidden="true"])');
  const { top: spaceTop } = host.getBoundingClientRect();

  const listHeight = length >= MAX_CHILDREN ? OPTION_HEIGHT * MAX_CHILDREN : OPTION_HEIGHT * length;
  const spaceBottom = window.innerHeight - spaceTop - SELECT_HEIGHT;
  return spaceBottom <= listHeight && spaceTop >= listHeight ? 'up' : 'down';
};

export const handleScroll = (host: HTMLElement, highlightedIndex: number): void => {
  const hostElementHeightThreshold = 200; // ??
  const { scrollHeight, scrollTop } = host;

  if (scrollHeight > hostElementHeightThreshold) {
    const fakeOptionHighlightedNode = getHTMLElements(host.shadowRoot, 'div')[highlightedIndex];

    if (fakeOptionHighlightedNode) {
      const { offsetTop, offsetHeight } = fakeOptionHighlightedNode;
      const scrollBottom = hostElementHeightThreshold + scrollTop;
      const elementBottom = offsetTop + offsetHeight;
      if (elementBottom > scrollBottom) {
        host.scrollTop = elementBottom - hostElementHeightThreshold;
      } else if (offsetTop < scrollTop) {
        host.scrollTop = offsetTop;
      }
    }
  }
};

export const getComponentCss = (direction: DropdownDirectionInternal, hidden: boolean, theme: Theme): string => {
  const isDarkTheme = isDark(theme);
  const isDirectionDown = direction === 'down';
  const { darkTheme } = color;

  return getCss({
    ...buildHostStyles({
      // borderColors are not set with !important to allow color override via parent
      borderColor: isDarkTheme ? darkTheme.neutralContrast.medium : color.neutralContrast.medium,
      '&:hover': {
        borderColor: isDarkTheme ? darkTheme.neutralContrast.high : color.neutralContrast.high,
      },
      ...addImportantToEachRule({
        fontFamily: font.family,
        ...font.size.small,
        display: 'block',
        position: 'absolute',
        zIndex: 10,
        left: 0,
        right: 0,
        maxHeight: pxToRemWithUnit(308),
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        background: color.background.default,
        borderWidth: '1px', // separate css property to allow color override via parent
        borderStyle: 'solid', // separate css property to allow color override via parent
        scrollbarWidth: 'thin', // firefox
        scrollbarColor: 'auto', // firefox
        transition: `border-color ${transitionDuration} ${transitionTimingFunction}`,
        transform: 'translate3d(0,0,0)', // fix iOS bug if less than 5 items are displayed
        outline: 'none',
        ...(isDarkTheme && {
          background: darkTheme.background.default,
        }),
        ...(isDirectionDown
          ? {
              top: 'calc(100% - 1px)',
              borderTop: 'none',
              boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 12px 25px 0 rgba(0, 0, 0, 0.1)',
              '&::before': {
                content: '""',
                display: 'block',
                position: 'sticky',
                top: 0,
                width: '100%',
                height: '1px',
                background: isDarkTheme ? darkTheme.neutralContrast.low : color.neutralContrast.low,
              },
            }
          : {
              bottom: pxToRemWithUnit(47),
              borderBottom: 'none',
              boxShadow: '0 -2px 4px 0 rgba(0, 0, 0, 0.05), 0 -12px 25px 0 rgba(0, 0, 0, 0.075)',
              '&::after': {
                content: '""',
                display: 'block',
                position: 'sticky',
                bottom: 0,
                width: '100%',
                height: '1px',
                background: isDarkTheme ? darkTheme.neutralContrast.low : color.neutralContrast.low,
              },
            }),
        ...(hidden && {
          top: 'calc(100% - 3px)',
          opacity: 0,
          overflow: 'hidden',
          height: 1,
          pointerEvents: 'none',
        }),
      }),
    }),
    option: {
      display: 'flex',
      padding: `${pxToRemWithUnit(4)} ${pxToRemWithUnit(11)}`,
      minHeight: pxToRemWithUnit(24),
      cursor: 'pointer',
      textAlign: 'left',
      wordBreak: 'break-word',
      color: isDarkTheme ? darkTheme.default : color.default,
      transition:
        `color ${transitionDuration} ${transitionTimingFunction},` +
        `background-color ${transitionDuration} ${transitionTimingFunction}`,
      '&[role="status"]': {
        cursor: 'not-allowed',
      },
      '&-sr': getScreenReaderJssStyle(),
      '&:not([aria-disabled]):not([role="status"]):hover': {
        color: isDarkTheme ? darkTheme.state.hover : color.state.hover,
        background: isDarkTheme ? color.default : color.background.surface,
      },
      '&--highlighted, &--selected': {
        color: isDarkTheme ? darkTheme.state.active : color.state.active,
        background: isDarkTheme ? color.default : color.background.surface,
      },
      '&--selected': {
        cursor: 'default',
        pointerEvents: 'none',
      },
      '&--disabled': {
        cursor: 'not-allowed',
        color: isDarkTheme ? darkTheme.state.disabled : color.state.disabled,
      },
      '&--hidden': {
        display: 'none',
      },
    },
    icon: {
      marginLeft: pxToRemWithUnit(4),
    },
    optgroup: {
      display: 'block',
      padding: `${pxToRemWithUnit(8)} ${pxToRemWithUnit(12)}`,
      marginTop: pxToRemWithUnit(8),
      fontWeight: font.weight.bold,
      '& ~ .option': {
        paddingLeft: pxToRemWithUnit(24),
      },
    },
  });
};

export const addComponentCss = (
  host: HTMLElement,
  direction: DropdownDirection,
  hidden: boolean,
  theme: Theme
): void => {
  attachCss(host, getComponentCss(direction === 'auto' ? determineDropdownDirection(host) : direction, hidden, theme));
};
