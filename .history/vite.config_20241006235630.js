import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.VITE_SPOTIFY_CLIENT_ID': JSON.stringify(process.env.VITE_SPOTIFY_CLIENT_ID),
    'process.env.VITE_SPOTIFY_CLIENT_SECRET': JSON.stringify(process.env.VITE_SPOTIFY_CLIENT_SECRET),
    'process.env.VITE_SPOTIFY_REDIRECT_URI': JSON.stringify(process.env.VITE_SPOTIFY_REDIRECT_URI)
  }
})
