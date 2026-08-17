import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Seamless deployment to https://SRIHARI143HARSHA.github.io/portfolio/
  server: {
    port: 3000,
    open: true
  }
});
