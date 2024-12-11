import { style } from '@vanilla-extract/css';
import { getFocusStyle, getHoverStyle } from '../../../src/vanilla-extract';

// Will be compiled by rollup into css file which is then used in the unit test
export const vanillaExtractTestCss = style({
  ...getFocusStyle(),
  ...getHoverStyle(),
});
