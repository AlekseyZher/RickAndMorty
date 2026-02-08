import { resolve } from 'path';

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  base: '/RickAndMorty/',
  plugins: [react(), svgr()],
    resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), 
    },
  },
})
