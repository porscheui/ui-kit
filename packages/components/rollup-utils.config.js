import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import * as globby from 'globby';
import * as path from 'path';
import * as fs from 'fs';

const outputDir = 'dist/utils';
const input = 'src/utils-entry.ts';

const generateUtilsEntryFile = () => {
  const componentsDir = path.resolve(__dirname, 'src/components');
  const utilsPaths = globby.sync(`${componentsDir}/**/*-utils.ts`).sort();

  const utilsExports = utilsPaths
    .map((utilPath) => `export * from './components${utilPath.replace(componentsDir, '').replace(/\.ts$/, '')}';`)
    .join('\n');

  const inputContent = `/* Auto Generated File */

export * from './utils';
${utilsExports}
`;

  fs.writeFileSync(path.resolve(__dirname, input), inputContent);
  console.log(`Successfully generated ${input}`);
};

generateUtilsEntryFile();

export default {
  input,
  output: {
    dir: outputDir,
    format: 'cjs',
  },
  plugins: [
    replace({
      ROLLUP_REPLACE_IS_STAGING: '"production"',
      preventAssignment: true,
    }),
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: outputDir,
      include: ['src/**/*.ts'],
    }),
  ],
};
