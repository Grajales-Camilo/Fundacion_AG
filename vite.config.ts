import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Fundacion_AG/', // Esta línea es la clave para publicar en GitHub Pages
  server: {
    port: 3000
  }
})
