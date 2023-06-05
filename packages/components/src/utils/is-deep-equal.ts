import { isObject } from './jss';

export const isDeepEqual = (newVal: unknown, oldVal: unknown): boolean => {
  if (typeof newVal !== 'object' || typeof oldVal !== 'object') {
    // string, boolean, number
    return newVal === oldVal;
  } else if (Array.isArray(newVal) || Array.isArray(newVal)) {
    throw new Error(
      'Values of type array are currently not handled by the isDeepEqual(). Array equality check must be added if needed.'
    );
  }

  const keys1 = Object.keys(newVal);
  const keys2 = Object.keys(oldVal);

  if (keys1.length === keys2.length) {
    for (const key of keys1) {
      const val1 = newVal[key];
      const val2 = oldVal[key];
      const areObjects = isObject(val1 as Record<string, any>) && isObject(val2 as Record<string, any>);
      if ((areObjects && !isDeepEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
        return false;
      }
    }
  }
  return true;
};
