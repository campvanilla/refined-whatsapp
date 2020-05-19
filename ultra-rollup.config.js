import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './dist/content-scripts/index.js',
  output: {
    file: './dist/refined.js',
    name: 'bundle',
    compact: true,
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
