import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [['@swc/plugin-emotion', {}]]
    }),
    eslintPlugin({
      include: ['src/**/*']
    })
  ]
});
