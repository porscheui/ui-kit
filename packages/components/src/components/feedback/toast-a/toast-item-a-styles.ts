import { addImportantToEachRule, attachComponentCss, getCss } from '../../../utils';
import { color } from '@porsche-design-system/utilities';
import type { ToastState } from './toast-a-types';
import { timeout } from './toast-a-manager';

const getStateColor = (state: ToastState): { baseColor: string; softColor: string } => {
  const { success, successSoft, neutral, neutralSoft } = color.notification;

  switch (state) {
    case 'success':
      return { baseColor: success, softColor: successSoft };
    // case 'warning':
    //   return { baseColor: warning, softColor: warningSoft };
    // case 'error':
    //   return { baseColor: error, softColor: errorSoft };
    default:
      return { baseColor: neutral, softColor: neutralSoft };
  }
};

export const getComponentCss = (state: ToastState): string => {
  const { baseColor, softColor } = getStateColor(state);

  return getCss({
    '@keyframes progress': {
      from: { width: '100%' },
      to: { width: 0 },
    },
    ':host': addImportantToEachRule({
      display: 'block',
      marginTop: '1rem',
    }),
    ':host(:first-of-type)': addImportantToEachRule({
      marginTop: 0,
    }),
    root: {
      width: '20vw',
      maxWidth: '20rem',
      boxSizing: 'border-box',
      padding: '1rem',
      background: softColor,
    },
    progress: {
      animationName: '$progress',
      animationDuration: `${timeout}ms`,
      animationTimingFunction: 'linear',
      animationFillMode: 'forwards',
      display: 'block',
      background: baseColor,
      height: '.5rem',
    },
  });
};

export const addComponentCss = (host: HTMLElement, state: ToastState): void => {
  attachComponentCss(host, getComponentCss, state);
};
