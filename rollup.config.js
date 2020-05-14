import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';

import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension';

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    // always put chromeExtension() before other plugins
    chromeExtension(),
    simpleReloader(),


    resolve(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env']
    }),
    commonjs(),
    replace({
      __DEBUG__: dev,
      __DEV__: dev,
      __PROD__: prod,
    })
  ],
}
