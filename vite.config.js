import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite port
  },
  build: {
    outDir: 'dist', // Ensure build files go into the correct folder
  },
  base: '/', // This ensures correct routing after deployment
});