import {
  getInputPadding,
  setInputStyles,
  hasCounter,
  throwIfUnitLengthExceeded,
  TextFieldWrapperUnitPosition,
  hasCounterAndIsTypeText,
  setCounterInnerHtml,
  addInputEventListenerForCounter,
  setAriaElementInnerHtml,
  hasUnitAndIsTypeTextOrNumber,
  isWithinForm,
  isType,
  addInputEventListenerForSearch,
} from './text-field-wrapper-utils';
import * as textFieldWrapperUtils from './text-field-wrapper-utils';
import * as getClosestHTMLElementUtils from '../../../utils/dom/getClosestHTMLElement';
import { FormState } from '../../../types';

const getInputElement = (): HTMLInputElement => {
  const el = document.createElement('input');
  el.id = 'input';
  return el;
};
const getCounterElement = (): HTMLSpanElement => {
  const el = document.createElement('span');
  el.id = 'counter';
  return el;
};

const getAriaElement = (): HTMLSpanElement => {
  const el = document.createElement('span');
  el.id = 'ariaElement';
  return el;
};

describe('hasCounter()', () => {
  it('should for defined maxLength return true', () => {
    const inputElement = getInputElement();
    inputElement.maxLength = 20;
    expect(hasCounter(inputElement)).toBe(true);
  });

  it('should for undefined maxLength return false', () => {
    const inputElement = getInputElement();
    Object.defineProperty(inputElement, 'maxLength', { value: -1 }); // jsdom defaults to 524288 which is 512 KB
    expect(hasCounter(inputElement)).toBe(false);
  });
});

describe('hasCounterAndIsTypeText()', () => {
  it('should call isType() with correct parameters', () => {
    const inputElement = getInputElement();
    const spy = jest.spyOn(textFieldWrapperUtils, 'isType');
    hasCounterAndIsTypeText(inputElement);

    expect(spy).toBeCalledWith(inputElement.type, 'text');
  });

  it('should call hasCounter() with correct parameters', () => {
    const inputElement = getInputElement();
    const spy = jest.spyOn(textFieldWrapperUtils, 'hasCounter');
    hasCounterAndIsTypeText(inputElement);

    expect(spy).toBeCalledWith(inputElement);
  });

  it('should for input type="text" with maxLength return true', () => {
    const inputElement = getInputElement();
    jest.spyOn(textFieldWrapperUtils, 'isType').mockReturnValue(true);
    jest.spyOn(textFieldWrapperUtils, 'hasCounter').mockReturnValue(true);

    expect(hasCounterAndIsTypeText(inputElement)).toBe(true);
  });

  it('should for input type="text" without maxLength return false', () => {
    const inputElement = getInputElement();
    jest.spyOn(textFieldWrapperUtils, 'isType').mockReturnValue(true);
    jest.spyOn(textFieldWrapperUtils, 'hasCounter').mockReturnValue(false);

    expect(hasCounterAndIsTypeText(inputElement)).toBe(false);
  });

  it.each<string>(['number', 'email', 'tel', 'search', 'url', 'date', 'time', 'month', 'week', 'password'])(
    'should for input type="%s" with maxLength return false',
    (type) => {
      const inputElement = getInputElement();
      inputElement.type = type;
      inputElement.maxLength = 20;

      expect(hasCounterAndIsTypeText(inputElement)).toBe(false);
    }
  );
});

describe('hasUnitAndIsTypeTextOrNumber()', () => {
  it('should call isType() with correct parameters', () => {
    const inputElement = getInputElement();
    const spy = jest.spyOn(textFieldWrapperUtils, 'isType').mockReturnValue(false);
    hasUnitAndIsTypeTextOrNumber(inputElement, 'EUR');

    expect(spy).toHaveBeenNthCalledWith(1, inputElement.type, 'text');
    expect(spy).toHaveBeenNthCalledWith(2, inputElement.type, 'number');
  });

  it.each<string>(['text', 'number'])('should for input type="%s" and unit="EUR" return true', (type) => {
    const inputElement = getInputElement();
    inputElement.type = type;

    expect(hasUnitAndIsTypeTextOrNumber(inputElement, 'EUR')).toBe(true);
  });

  it.each<string>(['text', 'number'])('should for input type="%s" and unit="" return false', (type) => {
    const inputElement = getInputElement();
    inputElement.type = type;

    expect(hasUnitAndIsTypeTextOrNumber(inputElement, '')).toBe(false);
  });

  it.each<string>(['email', 'tel', 'search', 'url', 'date', 'time', 'month', 'week', 'password'])(
    'should for input type="%s" and unit="EUR" return false',
    (type) => {
      const inputElement = getInputElement();
      inputElement.type = type;

      expect(hasUnitAndIsTypeTextOrNumber(inputElement, 'EUR')).toBe(false);
    }
  );
});

describe('isWithinForm()', () => {
  it('should call getClosestHTMLElement()', () => {
    const spy = jest.spyOn(getClosestHTMLElementUtils, 'getClosestHTMLElement');
    const el = document.createElement('input');
    isWithinForm(el);

    expect(spy).toBeCalledWith(el, 'form');
  });

  it('should return true or false based on result of getClosestHTMLElement()', () => {
    const spy = jest.spyOn(getClosestHTMLElementUtils, 'getClosestHTMLElement');
    const el = document.createElement('input');

    spy.mockReturnValue(null);
    expect(isWithinForm(el)).toBe(false);

    spy.mockReturnValue(document.createElement('form'));
    expect(isWithinForm(el)).toBe(true);
  });
});

describe('isType()', () => {
  it('should return true for equal parameters', () => {
    expect(isType('text', 'text')).toBe(true);
    expect(isType('number', 'number')).toBe(true);
    expect(isType('password', 'password')).toBe(true);
  });

  it('should return false for unequal parameters', () => {
    expect(isType('password', 'search')).toBe(false);
    expect(isType('text', 'search')).toBe(false);
    expect(isType('password', 'number')).toBe(false);
  });
});

describe('setCounterInnerHtml()', () => {
  it('should set correct character count as innerText on element ', () => {
    const counterElement = getCounterElement();
    const inputElement = getInputElement();

    inputElement.maxLength = 20;
    inputElement.value = 'some';
    setCounterInnerHtml(inputElement, counterElement);
    expect(counterElement.innerText).toBe('4/20');

    inputElement.maxLength = 25;
    inputElement.value = 'Hi';
    setCounterInnerHtml(inputElement, counterElement);
    expect(counterElement.innerText).toBe('2/25');
  });
});

describe('setAriaElementInnerHtml()', () => {
  const getAccessibilityMessage = (remainingCharacter: number, maxCharacter: number) =>
    `You have ${remainingCharacter} out of ${maxCharacter} characters left`;

  it('should set correct character count text for screenreader as innerText on element ', () => {
    const ariaElement = getAriaElement();
    const inputElement = getInputElement();

    inputElement.maxLength = 20;
    inputElement.value = 'some';
    setAriaElementInnerHtml(inputElement, ariaElement);
    expect(ariaElement.innerText).toBe(getAccessibilityMessage(16, 20));

    inputElement.maxLength = 25;
    inputElement.value = 'Hi';
    setAriaElementInnerHtml(inputElement, ariaElement);
    expect(ariaElement.innerText).toBe(getAccessibilityMessage(23, 25));
  });
});

describe('getInputPadding()', () => {
  it.each<[TextFieldWrapperUnitPosition, FormState, string]>([
    ['prefix', 'none', '0.6875rem 0.6875rem 0.6875rem 3.75rem'],
    ['prefix', 'success', '0.625rem 0.625rem 0.625rem 3.75rem'],
    ['suffix', 'none', '0.6875rem 3.75rem 0.6875rem 0.6875rem'],
    ['suffix', 'success', '0.625rem 3.75rem 0.625rem 0.625rem'],
  ])('should for unitPosition: %s and state: %s return %s', (unitPosition, state, expected) => {
    expect(getInputPadding(60, unitPosition, state)).toBe(expected);
  });
});

describe('setInputStyles()', () => {
  it('should do nothing if unitOrCounterElement is undefined', () => {
    const input = getInputElement();
    setInputStyles(input, undefined, 'prefix', 'none');

    expect(input.style.cssText).toBe('');
  });

  it('should set inline padding on input', () => {
    const input = getInputElement();
    const unitElement = getCounterElement();
    Object.defineProperty(unitElement, 'offsetWidth', { value: 60 });
    setInputStyles(input, unitElement, 'prefix', 'none');

    expect(input.style.cssText).toBe('padding: 0.6875rem 0.6875rem 0.6875rem 3.75rem !important;');
  });
});

describe('throwIfUnitLengthExceeded()', () => {
  it('should throw error if unit length > 5', () => {
    expect(() => throwIfUnitLengthExceeded('123456')).toThrow();
  });

  it('should not throw error if unit length <= 5', () => {
    expect(() => throwIfUnitLengthExceeded('12345')).not.toThrow();
    expect(() => throwIfUnitLengthExceeded('1')).not.toThrow();
    expect(() => throwIfUnitLengthExceeded('')).not.toThrow();
  });
});

describe('addInputEventListenerForCounter()', () => {
  it('should register event listener on element', () => {
    const inputElement = getInputElement();
    const counterElement = getCounterElement();
    const ariaElement = getAriaElement();
    const spy = jest.spyOn(inputElement, 'addEventListener');

    addInputEventListenerForCounter(inputElement, ariaElement, counterElement);
    expect(spy).toBeCalledWith('input', expect.anything());
  });

  it('should register event listener on element without error when no counterElement is provided', () => {
    const inputElement = getInputElement();
    const ariaElement = getAriaElement();
    const spy = jest.spyOn(inputElement, 'addEventListener');
    let error = undefined;
    try {
      addInputEventListenerForCounter(inputElement, ariaElement);
    } catch (e) {
      error = e;
    }
    expect(error).toBeUndefined();
    expect(spy).toBeCalledWith('input', expect.anything());
  });

  it('should initially call setCounterInnerHtml() and setAriaElementInnerHtml()', () => {
    const inputElement = getInputElement();
    const counterElement = getCounterElement();
    const ariaElement = getAriaElement();

    const setCounterInnerHtmlSpy = jest.spyOn(textFieldWrapperUtils, 'setCounterInnerHtml');
    const setAriaElementInnerHtmlSpy = jest.spyOn(textFieldWrapperUtils, 'setAriaElementInnerHtml');
    addInputEventListenerForCounter(inputElement, ariaElement, counterElement);

    expect(setCounterInnerHtmlSpy).toBeCalledWith(inputElement, counterElement);
    expect(setCounterInnerHtmlSpy).toBeCalledTimes(1);

    expect(setAriaElementInnerHtmlSpy).toBeCalledWith(inputElement, ariaElement);
    expect(setAriaElementInnerHtmlSpy).toBeCalledTimes(1);
  });

  it('should on input event call setCounterInnerHtml() and setAriaElementInnerHtml()', () => {
    const inputElement = getInputElement();
    const counterElement = getCounterElement();
    const ariaElement = getAriaElement();
    const setCounterInnerHtmlSpy = jest.spyOn(textFieldWrapperUtils, 'setCounterInnerHtml');
    const setAriaElementInnerHtmlSpy = jest.spyOn(textFieldWrapperUtils, 'setAriaElementInnerHtml');
    addInputEventListenerForCounter(inputElement, ariaElement, counterElement);

    inputElement.dispatchEvent(new Event('input'));
    expect(setCounterInnerHtmlSpy).toBeCalledWith(inputElement, counterElement);
    expect(setCounterInnerHtmlSpy).toBeCalledTimes(2);
    expect(setAriaElementInnerHtmlSpy).toBeCalledWith(inputElement, ariaElement);
    expect(setAriaElementInnerHtmlSpy).toBeCalledTimes(2);
  });

  it('should on input event call inputChangeCallback() if supplied', () => {
    const inputElement = getInputElement();
    const counterElement = getCounterElement();
    const ariaElement = getAriaElement();
    const callback = jest.fn();
    addInputEventListenerForCounter(inputElement, ariaElement, counterElement, callback);

    inputElement.dispatchEvent(new Event('input'));
    expect(callback).toBeCalledTimes(1);
  });
});

describe('addInputEventListenerForSearch()', () => {
  it('should register event listeners on element', () => {
    const inputElement = getInputElement();
    const spy = jest.spyOn(inputElement, 'addEventListener');
    addInputEventListenerForSearch(inputElement, () => {});

    expect(spy).toHaveBeenNthCalledWith(1, 'input', expect.any(Function));
    expect(spy).toHaveBeenNthCalledWith(2, 'keydown', expect.any(Function));
    expect(spy).toBeCalledTimes(2);
  });

  it('should on input event call inputChangeCallback()', () => {
    const inputElement = getInputElement();
    const callback = jest.fn();
    addInputEventListenerForSearch(inputElement, callback);

    inputElement.dispatchEvent(new Event('input'));
    expect(callback).toBeCalledWith(expect.any(Boolean));
    expect(callback).toBeCalledTimes(1);
  });

  it('should on keydown event for Escape and Esc key reset input.value and emit input event', () => {
    const inputElement = getInputElement();
    inputElement.value = 'search-term';
    const spy = jest.spyOn(inputElement, 'dispatchEvent');

    addInputEventListenerForSearch(inputElement, jest.fn());
    inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(inputElement.value).toBe('');
    expect(spy).toBeCalledWith(new Event('input'));

    inputElement.value = 'search-term';
    inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Esc' }));
    expect(inputElement.value).toBe('');
    expect(spy).toBeCalledWith(new Event('input'));
  });

  it('should not reset input.value and not emit input event on keydown event for other keys than Escape and Esc', () => {
    const inputElement = getInputElement();
    inputElement.value = 'search-term';
    const spy = jest.spyOn(inputElement, 'dispatchEvent');
    addInputEventListenerForSearch(inputElement, jest.fn());

    inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'A' }));
    expect(inputElement.value).toBe('search-term');
    expect(spy).not.toBeCalledWith(new Event('input'));

    inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    expect(inputElement.value).toBe('search-term');
    expect(spy).not.toBeCalledWith(new Event('input'));
  });
});
