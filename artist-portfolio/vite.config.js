import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with the actual repo name on GitHub
export default defineConfig({
  base: '/juliapfeilartist/',
  plugins: [react()],
})

