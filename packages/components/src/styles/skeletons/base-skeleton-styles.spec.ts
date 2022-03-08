import {
  extendPseudoWithTheme,
  getAfterMinHeight,
  getBaseSkeletonStyle,
  getElementBackgroundGradient,
  getHiddenLabelStyle,
  getSkeletonElementHeight,
  getSkeletonPropertyNames,
  getThemedPseudoStyle,
} from './base-skeleton-styles';
import { TAG_NAMES_WITH_SKELETON } from '@porsche-design-system/shared-src/src';
import { TagName } from '@porsche-design-system/shared';

describe('getSkeletonElementHeight()', () => {
  it.each([
    [48, true, true, '6.25rem'],
    [48, true, false, '4.75rem'],
    [48, false, true, '4.5rem'],
    [48, false, false, '3rem'],
  ])(
    'should for parameters elementHeight: %s, withLabel: %s and withDescription: %s return %s',
    (height: number, withLabel: boolean, withDescription: boolean, result: string) => {
      expect(getSkeletonElementHeight(height, withLabel, withDescription)).toBe(result);
    }
  );
});

describe('getAfterMinHeight()', () => {
  it('should return correct value', () => {
    expect(getAfterMinHeight(16)).toBe('calc(100% - 1rem)');
  });
});

describe('getElementBackgroundGradient()', () => {
  it.each([
    [
      36,
      4,
      false,
      'linear-gradient(transparent, transparent 4px, currentColor 4px, currentColor 32px, transparent 32px, transparent 36px)',
    ],
    [
      58,
      6,
      false,
      'linear-gradient(transparent, transparent 6px, currentColor 6px, currentColor 52px, transparent 52px, transparent 58px)',
    ],
    [
      52,
      4,
      true,
      'linear-gradient(transparent, transparent 4px, currentColor 4px, currentColor 20px, transparent 20px, transparent 28px, currentColor 28px, currentColor 40px, transparent 40px, transparent 52px)',
    ],
  ])(
    'should for parameters elementHeight: %s, topGradientSpacing: %s and hasDescription: %s return %s',
    (elementHeight: number, topGradientSpacing: number, hasDescription: boolean, result: string) => {
      expect(getElementBackgroundGradient(elementHeight, topGradientSpacing, hasDescription)).toBe(result);
    }
  );
});

describe('getBaseSkeletonStyle()', () => {
  it.each<Parameters<typeof getBaseSkeletonStyle>>([
    [true, 48],
    [false, 24],
  ])('should match style snapshot for hasLabel: %s and elementHeight: %s', (...args) => {
    expect(getBaseSkeletonStyle(...args)).toMatchSnapshot();
  });
});

describe('extendPseudoWithTheme()', () => {
  it.each<Parameters<typeof extendPseudoWithTheme>>([
    [{}],
    [{ theme: 'dark' }],
    [{ styleFunction: () => ({ display: 'block' }) }],
    [{ pseudosToExtend: ['&::after', '&::before'] }],
    [{ theme: 'dark', styleFunction: () => ({ display: 'block' }), pseudosToExtend: ['&::after', '&::before'] }],
  ])('should match style snapshot for parameters: %o ', (...args) => {
    expect(extendPseudoWithTheme(...args)).toMatchSnapshot();
  });
});

describe('getThemedPseudoStyle()', () => {
  it.each<Parameters<typeof getThemedPseudoStyle>>([[true], [false]])(
    'should match style snapshot for hasLabel: %s',
    (...args) => {
      expect(getThemedPseudoStyle(...args)).toMatchSnapshot();
    }
  );
});

describe('getHiddenLabelStyle()', () => {
  it('should match style snapshot', () => {
    expect(getHiddenLabelStyle()).toMatchSnapshot();
  });
});

describe('getSkeletonPropertyNames()', () => {
  it.each<TagName[]>(TAG_NAMES_WITH_SKELETON.map((tagName: TagName) => [tagName]))(
    'should match get correct skeleton property names %s',
    (tagName) => {
      expect(getSkeletonPropertyNames(tagName)).toMatchSnapshot();
    }
  );
});
