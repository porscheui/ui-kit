export type FontSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
export type FontWeight = 'thin' | 'regular' | 'semibold' | 'bold';
export type FontSizeLineHeight = { fontSize: string; lineHeight: number };
export type FontBehavior = {
  overflowWrap: 'break-word';
  hyphens: 'auto';
  WebkitTextSizeAdjust: 'none';
  textSizeAdjust: 'none';
};
