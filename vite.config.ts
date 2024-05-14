import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/react-shopping-cart/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  envPrefix: 'VITE_',
  base: BASE_URL,
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@constants', replacement: resolve(__dirname, 'src/constants') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@routes', replacement: resolve(__dirname, 'src/routes') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
    ],
  },
});