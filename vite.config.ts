import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rest-countries-api-with-color-theme-switcher/',
  plugins: [react()],
})
