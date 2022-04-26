import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: './src/index.ts',
  output: {
    file: './history.js',
    format: 'cjs',
    name: 'history',
  },
  plugins: [typescript(), resolve()]
};