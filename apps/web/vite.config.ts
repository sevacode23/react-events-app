import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import sass from 'sass';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),

    checker({
      typescript: {
        buildMode: true,
      },
      eslint: {
        lintCommand: 'eslint .',
        useFlatConfig: true,
      },
    }),

    tsconfigPaths(),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
