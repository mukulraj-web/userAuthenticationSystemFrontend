import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // plugins:[],
  
  server: {
    proxy: {
      "/register": "http://localhost:8000",
      "/login": "http://localhost:8000"

      
    }
  }
})
