import {
  addImportantToEachRule,
  buildSlottedStyles,
  getBaseSlottedStyles,
  getCss,
  getThemedColors,
  mergeDeep,
} from '../../../../utils';
import type { JssStyle } from '../../../../utils';
import type { HeadlineVariant, TextAlign, TextColor, Theme, VariantType } from '../../../../types';
import { titleLarge, headline } from '@porsche-design-system/utilities';
import { getDefaultEllipsisStyles, getDefaultSlottedTypoStyles } from '../../../../styles/typo-styles';
import { isVariantType } from './headline-utils';

const getVariantStyle = (variant: HeadlineVariant): JssStyle => {
  return variant === 'large-title' ? titleLarge : headline[(variant as VariantType).slice(-1)];
};

export const getComponentCss = (
  variant: HeadlineVariant,
  align: TextAlign,
  color: Extract<TextColor, 'default' | 'inherit'>,
  ellipsis: boolean,
  theme: Theme
): string => {
  const { baseColor } = getThemedColors(theme);

  return getCss({
    ':host': {
      display: 'block',
    },
    '::slotted': {
      '&(h1),&(h2),&(h3),&(h4),&(h5),&(h6)': addImportantToEachRule(getDefaultSlottedTypoStyles()),
    },
    root: {
      padding: 0,
      margin: 0,
      WebkitTextSizeAdjust: 'none', // stop iOS safari from adjusting font size when screen rotation is changing
      textAlign: align,
      color: color !== 'default' ? 'inherit' : baseColor,
      overflowWrap: 'break-word',
      wordWrap: 'break-word',
      hyphens: 'auto',
      whiteSpace: 'inherit',
      ...(isVariantType(variant) ? getVariantStyle(variant) : variant === 'inherit' && { fontSize: 'inherit' }),
      ...(ellipsis && getDefaultEllipsisStyles()),
    },
  });
};

export const getSlottedCss = (host: HTMLElement): string => {
  return getCss(
    mergeDeep(
      buildSlottedStyles(host, getBaseSlottedStyles()),
      buildSlottedStyles(host, { '& a': { textDecoration: 'none' } })
    )
  );
};
