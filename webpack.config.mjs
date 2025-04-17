import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
    },
    fallback: {
      buffer: false,
      http: false,
      https: false,
      fs: false,
      os: false,
      path: false,
      util: false,
      zlib: false,
    },
  },
  output: {
    filename: 'index.js',
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
};
