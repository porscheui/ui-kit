import type { AriaAttributes } from 'react';
import type { DropdownDirectionInternal } from '../select-wrapper/select-wrapper-utils';
import { getHTMLElements, getTagName, hasAttribute } from '../../../../utils';
import { OPTION_HEIGHT, SELECT_HEIGHT } from '../select-wrapper/select-wrapper-styles';

const MAX_CHILDREN = 10;

export const getAriaAttributes = (optionMaps: OptionMap[], hasFilter: boolean): AriaAttributes => {
  const highlightedIndex = getHighlightedOptionMapIndex(optionMaps);
  return hasFilter
    ? {}
    : {
        ...(highlightedIndex >= 0 && { 'aria-activedescendant': `option-${highlightedIndex}` }),
      };
};

export const getOptionAriaAttributes = (option: OptionMap): AriaAttributes => ({
  'aria-selected': option.highlighted ? 'true' : null,
  'aria-disabled': option.disabled ? 'true' : null,
  'aria-hidden': option.hidden || option.initiallyHidden ? 'true' : null,
  'aria-label': option.value ? null : 'Empty value',
});

export const determineDirection = (host: HTMLElement): DropdownDirectionInternal => {
  const { length } = getHTMLElements(host.shadowRoot, '.option:not([aria-hidden="true"])');
  const { top } = host.getBoundingClientRect();

  const listHeight = length >= MAX_CHILDREN ? OPTION_HEIGHT * MAX_CHILDREN : OPTION_HEIGHT * length;
  const spaceBottom = window.innerHeight - top - SELECT_HEIGHT;
  return spaceBottom <= listHeight && top >= listHeight ? 'up' : 'down';
};

export const handleScroll = (host: HTMLElement, highlightedIndex: number): void => {
  const hostElementHeightThreshold = 200; // ??
  const { scrollHeight, scrollTop } = host;

  if (scrollHeight > hostElementHeightThreshold) {
    const highlightedNode = getHTMLElements(host.shadowRoot, 'div')[highlightedIndex];

    if (highlightedNode) {
      const { offsetTop, offsetHeight } = highlightedNode;
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

export type OptionMap = {
  value: string;
  disabled: boolean;
  hidden: boolean; // used for filtering
  initiallyHidden: boolean;
  selected: boolean;
  highlighted: boolean;
  title?: string; // for optgroup
};

export const getOptionsElements = (select: HTMLSelectElement): HTMLOptionElement[] => Array.from(select.options);

export const getOptionMaps = (options: HTMLOptionElement[]): OptionMap[] =>
  options.map((item) => {
    const { selected, parentElement, previousElementSibling } = item;
    const option: OptionMap = {
      value: item.text,
      disabled: hasAttribute(item, 'disabled'),
      hidden: false,
      initiallyHidden: hasAttribute(item, 'hidden'),
      selected,
      highlighted: selected,
      ...(getTagName(parentElement) === 'optgroup' &&
        previousElementSibling === null && { title: (parentElement as HTMLOptGroupElement).label }),
    };
    return option;
  });

export const updateSelectedOptionMaps = (options: OptionMap[], newIndex: number): OptionMap[] =>
  options.map((item, idx) => ({
    ...item,
    selected: idx === newIndex,
    highlighted: idx === newIndex,
    hidden: false,
  }));

export const updateHighlightedOptionMaps = (options: OptionMap[], newIndex: number): OptionMap[] =>
  options.map((item, idx) => ({
    ...item,
    highlighted: idx === newIndex,
  }));

export const resetHighlightedOptionMaps = (options: OptionMap[]): OptionMap[] =>
  options.map((item) => ({ ...item, highlighted: false }));

export const updateFirstHighlightedOptionMaps = (options: OptionMap[]): OptionMap[] =>
  updateHighlightedOptionMaps(options, 0);

export const updateLastHighlightedOptionMaps = (options: OptionMap[]): OptionMap[] =>
  updateHighlightedOptionMaps(options, options.length - 1);

export const getHighlightedOptionMapIndex = (arr: OptionMap[]): number => arr.findIndex((item) => item.highlighted);
export const getSelectedOptionMapIndex = (arr: OptionMap[]): number => arr.findIndex((item) => item.selected);

export const getSelectedOptionMap = (arr: OptionMap[]): OptionMap => arr.find((item) => item.selected);

export const getHighlightedOptionMap = (arr: OptionMap[]): OptionMap => arr.find((item) => item.highlighted);

export const getValidOptions = (options: OptionMap[]): OptionMap[] =>
  options.filter((item) => !item.hidden && !item.initiallyHidden && !item.disabled);

export const getMatchingOptionMaps = (options: OptionMap[], searchString: string): OptionMap[] => {
  const lowerCaseSearchString = searchString.toLowerCase();
  return lowerCaseSearchString && options.filter((item) => item.value.toLowerCase() === lowerCaseSearchString);
};

export const updateFilteredOptionMaps = (options: OptionMap[], searchString: string): OptionMap[] => {
  const lowerCaseSearchString = searchString.toLowerCase();
  return options.map((item) => ({
    ...item,
    hidden: !item.initiallyHidden && !item.value.toLowerCase().includes(lowerCaseSearchString),
  }));
};

export const resetFilteredOptionMaps = (options: OptionMap[]): OptionMap[] =>
  options.map((item) => ({
    ...item,
    hidden: false,
  }));

export const hasFilterResults = (options: OptionMap[]): boolean =>
  options.some((item) => !item.hidden && !item.initiallyHidden);

export const getNewOptionMapIndex = (options: OptionMap[], direction: DropdownDirectionInternal): number => {
  const validItems = getValidOptions(options);
  const validMax = validItems.length - 1;
  // prob. needs to be <= 0
  if (validMax < 0) {
    return;
  }

  let i = getHighlightedOptionMapIndex(validItems);
  if (direction === 'down') {
    i = i < validMax ? i + 1 : 0;
  } else if (direction === 'up') {
    i = i > 0 ? i - 1 : validMax;
  }

  return options.indexOf(validItems[i]);
};

export type DropdownInteractionType = 'show' | 'hide' | 'toggle';
export const getDropdownVisibility = (
  isOpen: boolean,
  type: DropdownInteractionType,
  resetFilter?: () => void
): boolean => {
  if (isOpen && (type === 'hide' || type === 'toggle')) {
    if (resetFilter) {
      resetFilter();
    }
    return false;
  } else if (!isOpen && (type === 'show' || type === 'toggle')) {
    return true;
  } else {
    return isOpen;
  }
};
