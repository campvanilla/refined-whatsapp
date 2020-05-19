import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';

import { terser } from "rollup-plugin-terser";
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension';
import tsconfig from './tsconfig.json';

const prod = process.env.NODE_ENV === 'production';
const dev = !prod;

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: dev,
  },
  plugins: [
    // always put chromeExtension() before other plugins
    chromeExtension(),
    simpleReloader(),
    prod && terser(),

    resolve(),
    typescript({
      ...tsconfig.compilerOptions,
      sourceMap: dev,
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', 
      // {
      //   targets: 'Chrome > 65, not dead',
      //   useBuiltIns: 'usage',
      //   corejs: 3,
      // }
    ]
    }),
    commonjs(),
    replace({
      __DEBUG__: dev,
      __DEV__: dev,
      __PROD__: prod,
    })
  ].filter(Boolean),
}
