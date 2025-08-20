import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { tmpdir } from 'os';
import { devLogger } from '@meituan-nocode/vite-plugin-dev-logger';
import { devHtmlTransformer, prodHtmlTransformer } from '@meituan-nocode/vite-plugin-nocode-html-transformer';
import react from '@vitejs/plugin-react';

const isProdEnv = process.env.NODE_ENV === 'production';
// Compute a safe base path to avoid generating protocol-relative URLs like `//assets/...`
function computeBase() {
  if (!isProdEnv) {
    return process.env.PUBLIC_PATH || '/';
  }
  const parts = [process.env.PUBLIC_PATH, process.env.CHAT_VARIABLE].filter(Boolean);
  let base = parts.join('/');
  // Collapse multiple slashes to a single slash
  base = base.replace(/\/+/g, '/');
  if (!base.startsWith('/')) base = '/' + base;
  if (!base.endsWith('/')) base += '/';
  return base;
}
const BASE = computeBase();
const OUT_DIR = isProdEnv && process.env.CHAT_VARIABLE ? `build/${process.env.CHAT_VARIABLE}` : 'build';
const PLUGINS = isProdEnv ? [
  react(),
  prodHtmlTransformer(process.env.CHAT_VARIABLE)
] : [
  devLogger({
    dirname: resolve(tmpdir(), '.nocode-dev-logs'),
    maxFiles: '3d',
  }),
  react(),
  devHtmlTransformer(process.env.CHAT_VARIABLE),
];

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '::',
    port: '8080',
    hmr: {
      overlay: false
    }
  },
  plugins: [
    PLUGINS
  ],
  base: BASE,
  build: {
    outDir: OUT_DIR
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: 'lib',
        replacement: resolve(__dirname, 'lib'),
      },
    ],
  },
});