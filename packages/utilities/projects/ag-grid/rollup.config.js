import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const input = 'src/js/theme.ts';
const outputDir = 'dist';

export default [
  // Default JS Build - CJS
  {
    input,
    output: {
      dir: `${outputDir}/cjs`,
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
    },
    plugins: [typescript()],
  },
  // Default JS Build - ESM
  {
    input,
    output: {
      dir: `${outputDir}/esm`,
      format: 'esm',
      entryFileNames: '[name].mjs',
      preserveModules: true,
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: `${outputDir}/esm`,
        exclude: '**.spec.ts',
        rootDir: 'src/js',
      }),
      copy({
        targets: [{ src: ['src/scss/**/*.scss', 'src/_index.scss'], dest: outputDir }],
        flatten: false,
      }),
      generatePackageJson({
        outputFolder: outputDir,
        baseContents: {
          main: 'cjs/index.cjs',
          module: 'esm/index.mjs',
          types: 'esm/index.d.ts',
          sideEffects: false,
          exports: {
            // Default export (JS)
            '.': {
              types: './esm/index.d.ts',
              import: './esm/index.mjs',
              default: './cjs/index.cjs',
            },
          },
        },
      }),
    ],
  },
];
