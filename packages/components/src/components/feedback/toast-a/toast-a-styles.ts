import { addImportantToEachRule, attachComponentCss, getCss } from '../../../utils';

export const getComponentCss = (): string => {
  return getCss({
    ':host': addImportantToEachRule({
      position: 'fixed',
      right: '1rem',
      bottom: '1rem',
    }),
  });
};

export const addComponentCss = (host: HTMLElement): void => {
  attachComponentCss(host, getComponentCss);
};
