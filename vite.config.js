import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Hosted on Cloudflare Pages at the site root.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
