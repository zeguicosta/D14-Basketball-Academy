import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/D14-Basketball-Academy/", // Substitua pelo nome do seu repositório
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  }
})