import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./", // Substitua pelo nome do seu repositório
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})