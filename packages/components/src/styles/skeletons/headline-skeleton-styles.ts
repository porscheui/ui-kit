import { getMinifiedCss } from '@porsche-design-system/shared-src/src/styles/getMinifiedCss';
import { getTextHeadlineSkeletonBaseStyle, getTextHeadlineSkeletonSubStyle } from './text-skeleton-styles';
import {
  extendPseudoWithTheme,
  getElementBackgroundGradient,
  getSkeletonElementHeight,
  getThemedPseudoStyle,
  PDS_SKELETON_CLASS_PREFIX,
} from './base-skeleton-styles';
import { mediaQueryMin, mediaQueryMinMax } from '@porsche-design-system/utilities-v2/src/jss';
import type { JssStyle } from 'jss';
import {
  headline1,
  headline2,
  headline3,
  headline4,
  headline5,
  textSmall,
  titleLarge,
} from '@porsche-design-system/utilities-v2';

type HeadlineType = typeof headline1;
type TextType = typeof textSmall;

export const getTypographyElementHeight = (typography: HeadlineType | TextType): number => {
  const fontSizeInPx = getFontSizeInPx(typography.fontSize);
  return Math.round(fontSizeInPx * typography.lineHeight);
};

export const getHeadlineSkeletonCss = (): string => {
  return getMinifiedCss({
    '@global': {
      'p-headline': {
        '&:not(.hydrated)': {
          ...extendPseudoWithTheme({
            styleFunction: () => getTextHeadlineSkeletonBaseStyle(getTypographyElementHeight(headline1)),
          }),
          ...getHeadlineSkeletonStyle(headline1),
          [`&[variant=large-title], &.${PDS_SKELETON_CLASS_PREFIX}variant-large-title`]: {
            ...getTextHeadlineSkeletonSubStyle(getTypographyElementHeight(titleLarge)),
            ...getHeadlineSkeletonStyle(titleLarge),
          },
          [`&[variant=headline-2], &.${PDS_SKELETON_CLASS_PREFIX}variant-headline-2`]: {
            ...getTextHeadlineSkeletonSubStyle(getTypographyElementHeight(headline2)),
            ...getHeadlineSkeletonStyle(headline2),
          },
          [`&[variant=headline-3], &.${PDS_SKELETON_CLASS_PREFIX}variant-headline-3`]: {
            ...getTextHeadlineSkeletonSubStyle(getTypographyElementHeight(headline3)),
            ...getHeadlineSkeletonStyle(headline3),
          },
          [`&[variant=headline-4], &.${PDS_SKELETON_CLASS_PREFIX}variant-headline-4`]: {
            ...getTextHeadlineSkeletonSubStyle(getTypographyElementHeight(headline4)),
            ...getHeadlineSkeletonStyle(headline4),
          },
          [`&[variant=headline-5], &.${PDS_SKELETON_CLASS_PREFIX}variant-headline-5`]: getTextHeadlineSkeletonSubStyle(
            getTypographyElementHeight(headline5)
          ),
          ...getThemedPseudoStyle(),
        },
      },
    },
  });
};

const getFontSizeInPx = (fontSize: string): number => parseFloat(fontSize.replace('rem', '')) * 16;

const getHeadlineSkeletonStyle = (headline: HeadlineType): JssStyle => ({
  ...getHeadlineStyleByBreakpoint(headline, mediaQueryMinMax('s', 'm')),
  ...getHeadlineStyleByBreakpoint(headline, mediaQueryMinMax('m', 'l')),
  ...getHeadlineStyleByBreakpoint(headline, mediaQueryMinMax('l', 'xl')),
  ...getHeadlineStyleByBreakpoint(headline, mediaQueryMin('xl')),
});

const getHeadlineStyleByBreakpoint = (headline: HeadlineType, breakpoint: string): JssStyle => {
  return {
    [breakpoint]: getHeadlineBreakpointStyle(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      headline[breakpoint].fontSize as string,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      headline[breakpoint].lineHeight as number
    ),
  };
};

const getHeadlineBreakpointStyle = (fontSize: string, lineHeight: number): JssStyle => {
  const fontSizeInPx = getFontSizeInPx(fontSize);
  const elementHeight = Math.round(fontSizeInPx * lineHeight);
  const topGradientSpacing = (elementHeight - fontSizeInPx) / 2;

  return {
    height: getSkeletonElementHeight(elementHeight, false),
    '&::after': {
      background: getElementBackgroundGradient(elementHeight, topGradientSpacing),
    },
  };
};
