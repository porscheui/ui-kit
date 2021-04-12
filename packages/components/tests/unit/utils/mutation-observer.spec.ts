import { observeProperties, observeMutations, unobserveMutations, mutationMap } from '../../../src/utils';

describe('observeProperties()', () => {
  const callback = jest.fn();

  it('should define getter and setter for single prop', () => {
    const node = document.createElement('input');
    observeProperties(node, ['checked'], callback);

    const spyGet = jest.spyOn(node, 'checked', 'get').mockReturnValueOnce(false);
    const spySet = jest.spyOn(node, 'checked', 'set');

    expect(spyGet).toHaveBeenCalledTimes(0);
    expect(spySet).toHaveBeenCalledTimes(0);

    expect(node.checked).toBe(false);
    expect(spyGet).toHaveBeenCalledTimes(1);

    node.checked = true;
    expect(spySet).toHaveBeenCalledTimes(1);

    expect(node.checked).toBe(true);
    expect(spyGet).toHaveBeenCalledTimes(2);
  });

  it('should define getter and setter for multiple props', () => {
    const node = document.createElement('input');
    observeProperties(node, ['checked', 'disabled', 'indeterminate'], callback);

    const spyCheckedGet = jest.spyOn(node, 'checked', 'get');
    const spyCheckedSet = jest.spyOn(node, 'checked', 'set');
    const spyDisabledGet = jest.spyOn(node, 'disabled', 'get');
    const spyDisabledSet = jest.spyOn(node, 'disabled', 'set');
    const spyIndeterminateGet = jest.spyOn(node, 'indeterminate', 'get');
    const spyIndeterminateSet = jest.spyOn(node, 'indeterminate', 'set');

    expect(spyCheckedGet).toHaveBeenCalledTimes(0);
    expect(spyDisabledGet).toHaveBeenCalledTimes(0);
    expect(spyIndeterminateGet).toHaveBeenCalledTimes(0);

    node.checked = true;
    node.disabled = true;
    node.indeterminate = true;

    expect(spyCheckedSet).toHaveBeenCalledTimes(1);
    expect(spyDisabledSet).toHaveBeenCalledTimes(1);
    expect(spyIndeterminateSet).toHaveBeenCalledTimes(1);

    expect(node.checked).toBe(true);
    expect(node.disabled).toBe(true);
    expect(node.indeterminate).toBe(true);

    expect(spyCheckedGet).toHaveBeenCalledTimes(1);
    expect(spyDisabledGet).toHaveBeenCalledTimes(1);
    expect(spyIndeterminateGet).toHaveBeenCalledTimes(1);
  });

  it('should execute callback via setter', () => {
    const node = document.createElement('input');
    observeProperties(node, ['checked'], callback);

    expect(callback).toHaveBeenCalledTimes(0);
    node.checked = true;
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should execute _valueTracker.setValue() if it exists', () => {
    const setValue = jest.fn();
    const node = document.createElement('input');
    (node as any)._valueTracker = { setValue };
    observeProperties(node, ['checked'], callback);

    expect(setValue).toHaveBeenCalledTimes(0);
    node.checked = true;
    expect(setValue).toHaveBeenCalledTimes(1);
  });
});

describe('mutation-observer behavior', () => {
  beforeEach(() => {
    mutationMap.clear();
  });

  const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

  it('should add callback and key to mutationMap', () => {
    const node = document.createElement('input');
    const callback = () => {};

    observeMutations(node, ['checked'], callback);
    expect(mutationMap.size).toBe(1);
    expect(mutationMap.get(node)).toEqual(callback);
  });

  describe('should run callback once on attribute change', () => {
    it('when observeMutations is reapplied', async () => {
      const input = document.createElement('input');

      const cb = jest.fn();

      observeMutations(input, ['disabled'], cb);
      unobserveMutations(input);
      observeMutations(input, ['disabled'], cb);

      input.setAttribute('disabled', '');

      await tick();
      expect(cb).toBeCalledTimes(1);
    });

    it('when observeMutations is called multiple times', async () => {
      const input = document.createElement('input');

      const cb = jest.fn();

      observeMutations(input, ['disabled'], cb);
      observeMutations(input, ['disabled'], cb);
      observeMutations(input, ['disabled'], cb);

      input.setAttribute('disabled', '');

      await tick();
      expect(cb).toBeCalledTimes(1);
    });

    it('when multiple inputs are observed', async () => {
      const input1 = document.createElement('input');
      const input2 = document.createElement('input');

      const cb1 = jest.fn();
      const cb2 = jest.fn();

      observeMutations(input1, ['disabled'], cb1);
      observeMutations(input2, ['disabled'], cb2);

      input1.setAttribute('disabled', '');

      await tick();
      expect(cb1).toBeCalledTimes(1);
      expect(cb2).toBeCalledTimes(0);
    });
  });

  it('should not execute callback when mutationMap is cleared', async () => {
    const input = document.createElement('input');
    const cb = jest.fn();

    observeMutations(input, ['disabled'], cb);
    mutationMap.clear();

    input.setAttribute('disabled', '');
    await tick();

    expect(cb).toBeCalledTimes(0);
  });
});

describe('unobserveMutations()', () => {
  beforeEach(() => {
    mutationMap.clear();
  });

  it('should remove correct element from mutationCallbacks array', () => {
    const node1 = document.createElement('input');
    const node2 = document.createElement('select');
    const node3 = document.createElement('input');
    const callback1 = () => {};
    const callback2 = () => {};
    const callback3 = () => {};

    observeMutations(node1, ['checked'], callback1);
    observeMutations(node2, ['disabled'], callback2);
    observeMutations(node3, ['checked'], callback3);
    expect(mutationMap.size).toBe(3);

    unobserveMutations(node1);
    expect(mutationMap.size).toBe(2);
    expect(mutationMap.get(node2)).toEqual(callback2);
    expect(mutationMap.get(node3)).toEqual(callback3);

    unobserveMutations(node3);
    expect(mutationMap.size).toBe(1);
    expect(mutationMap.get(node2)).toEqual(callback2);
  });
});
