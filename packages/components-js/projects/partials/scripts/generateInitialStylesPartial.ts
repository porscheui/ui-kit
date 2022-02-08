import { INTERNAL_TAG_NAMES, TAG_NAMES, TAG_NAMES_WITH_SKELETON } from '@porsche-design-system/shared';
import { joinArrayElementsToString } from './utils';
import {
  getButtonLinkPureSkeletonStyles,
  getButtonLinkSkeletonStyles,
  getCheckboxRadioWrapperSkeletonStyles,
  getSelectTextFieldWrapperSkeletonStyles,
  getTextareaWrapperSkeletonStyles,
  SKELETON_COLOR_THEME_PLACEHOLDER,
  SKELETON_LINEAR_GRADIENT_COLOR_1,
  SKELETON_LINEAR_GRADIENT_COLOR_2,
} from '../../../../components/src/styles/skeletons';

export const generateInitialStylesPartial = (): string => {
  const types = `type InitialStylesOptions = {
  prefix?: string;
  withoutTags?: boolean;
  theme?: 'light' | 'dark';
}`;
  const skeletonTypes = `type SkeletonStylesOptions = {
  prefixedTagNamesWithSkeleton: string[];
  prefix?: string;
  theme?: 'light' | 'dark';
}`;

  const skeletonKeyframes = '@keyframes shimmer{0%{background-position:-450px 0}100%{background-position:450px 0}}';

  const skeletonStyles = [
    getButtonLinkSkeletonStyles(),
    getButtonLinkPureSkeletonStyles(),
    getCheckboxRadioWrapperSkeletonStyles(),
    getSelectTextFieldWrapperSkeletonStyles(),
    getTextareaWrapperSkeletonStyles(),
  ].join('');

  const tagNames = joinArrayElementsToString(
    TAG_NAMES.filter((x) => !INTERNAL_TAG_NAMES.includes(x) && !TAG_NAMES_WITH_SKELETON.includes(x))
  );

  const tagNamesWithSkeleton = joinArrayElementsToString(TAG_NAMES_WITH_SKELETON);

  const initialStylesFunction = `export const getInitialStyles = (opts?: InitialStylesOptions): string => {
  const options: InitialStylesOptions = {
    prefix: '',
    withoutTags: false,
    theme: 'light',
    ...opts
  };
  const { prefix, withoutTags, theme } = options;


  const tagNames = [${tagNames}];
  const prefixedTagNames = getPrefixedTagNames(tagNames, prefix)

  const styleInnerHTML= prefixedTagNames.join(',') + '{visibility:hidden}';

  const tagNamesWithSkeleton = [${tagNamesWithSkeleton}];
  const prefixedTagNamesWithSkeleton = getPrefixedTagNames(tagNamesWithSkeleton, prefix);

  const result = withoutTags ? styleInnerHTML : \`<style>\${styleInnerHTML}\${getSkeletonStyles({prefixedTagNamesWithSkeleton, prefix, theme})}</style>\`;
  return result;
};`;

  const skeletonStylesFunction = `const getSkeletonStyles = (opts?: SkeletonStylesOptions): string => {
  const options: SkeletonStylesOptions = {
     prefixedTagNamesWithSkeleton: [],
     prefix: '',
     theme: 'light',
     ...opts
  };
  const { prefixedTagNamesWithSkeleton, prefix, theme } = options;

  let skeletonStyles = '${skeletonStyles}';

  if(prefix){
    prefixedTagNamesWithSkeleton.forEach(prefixedTagName =>{
      const prefixRegExp = new RegExp(\`\${prefix}-\`, 'g');
      const tagName = prefixedTagName.replace(prefixRegExp, '');
      const tagRegExp = new RegExp(\`\${tagName}(?!-)\`, 'g');
      skeletonStyles = skeletonStyles.replace(tagRegExp, prefixedTagName);
    });
  }

  skeletonStyles = skeletonStyles.replace(/${SKELETON_COLOR_THEME_PLACEHOLDER}/g,\`\${theme === 'light' ? '#E3E4E5': '#626669'}\`);
  skeletonStyles = skeletonStyles.replace(/${SKELETON_LINEAR_GRADIENT_COLOR_1}/g,\`\${theme === 'light' ? '#E3E4E5': '#656871'}\`);
  skeletonStyles = skeletonStyles.replace(/${SKELETON_LINEAR_GRADIENT_COLOR_2}/g,\`\${theme === 'light' ? '#0000000d': '#888b94'}\`);

  const result = skeletonStyles + '${skeletonKeyframes}';
  // escape the "at" sign for sed replace command to work properly
  return result.replace(/(@)/g, '\\\\$1');
};`;

  const helperFunction = `const getPrefixedTagNames = (tagNames: string[], prefix?: string): string[] => {
  return prefix ? tagNames.map((x) => \`\${prefix}-\${x}\`) : tagNames;
}
`;

  return [types, skeletonTypes, helperFunction, initialStylesFunction, skeletonStylesFunction].join('\n\n');
};
