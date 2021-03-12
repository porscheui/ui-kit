import { getPrefixedTagNames, CACHE } from '../../../src/utils';
import { TAG_NAMES } from '@porsche-design-system/shared';

describe('getPrefixedTagNames', () => {
  beforeEach(() => {
    CACHE.clear();
  });

  it('should return an object with a mapping of all tag names to the prefixed ones', () => {
    const resultWithoutPrefix = getPrefixedTagNames(document.createElement('p-button'));
    expect(resultWithoutPrefix.pButton).toEqual('p-button');
    expect(Object.keys(resultWithoutPrefix).length).toEqual(TAG_NAMES.length);

    const resultWithPrefix = getPrefixedTagNames(document.createElement('my-prefix-p-button'));
    expect(resultWithPrefix.pButton).toEqual('my-prefix-p-button');
    expect(Object.keys(resultWithPrefix).length).toEqual(TAG_NAMES.length);
  });

  it('should cache result', () => {
    expect(CACHE.size).toEqual(0);
    getPrefixedTagNames(document.createElement('p-button'));
    expect(CACHE.has('')).toEqual(true);
    expect(CACHE.size).toEqual(1);
  });

  it('should not cache result for identical prefix', () => {
    getPrefixedTagNames(document.createElement('p-button'));
    getPrefixedTagNames(document.createElement('p-button'));
    expect(CACHE.has('')).toEqual(true);
    expect(CACHE.size).toEqual(1);
  });

  it('should extend cache on 2nd call for different prefix', () => {
    getPrefixedTagNames(document.createElement('p-button'));
    getPrefixedTagNames(document.createElement('pux-p-button'));
    expect(CACHE.has('')).toEqual(true);
    expect(CACHE.has('pux')).toEqual(true);
    expect(CACHE.size).toEqual(2);
  });

  it('should return cached result after first call', () => {
    const spy = jest.spyOn(CACHE, 'set');
    getPrefixedTagNames(document.createElement('p-button'));
    getPrefixedTagNames(document.createElement('p-button'));
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
