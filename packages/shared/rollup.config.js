import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      esModule: false,
      dir: 'dist',
      format: 'umd',
      name: pkg.name,
      exports: 'named',
    },
    plugins: [typescript({ declaration: true, declarationDir: 'dist/types', rootDir: 'src' })],
  },
  {
    input: 'src/index.ts',
    output: { dir: 'dist/esm', format: 'esm' },
    plugins: [typescript()],
  },
  {
    input: 'src/testing.ts',
    external: Object.keys(pkg.dependencies),
    output: {
      dir: 'dist',
      format: 'cjs',
      exports: 'named',
    },
    // fix typing issue
    plugins: [typescript()],
  },
];
