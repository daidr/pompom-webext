import { defineConfig } from 'tsup'
import { isDev } from './scripts/utils'

export default defineConfig(() => ({
  entry: {
    'background/index': './src/background/index.ts',
    ...(isDev ? { mv3client: './scripts/client.ts' } : {}),
  },
  outDir: 'extension/dist',
  format: ['esm'],
  target: 'esnext',
  splitting: false,
  sourcemap: isDev ? 'inline' : false,
  ignoreWatch: ['**/extension/**'],
  define: {
    __DEV__: JSON.stringify(isDev),
  },
  minifyWhitespace: !isDev,
  minifySyntax: !isDev,
}))
