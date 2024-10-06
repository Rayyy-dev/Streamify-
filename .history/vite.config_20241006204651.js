import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Add this section to expose the environment variable to your app
  define: {
    'process.env.SPOTIFY_CLIENT_ID': JSON.stringify(process.env.SPOTIFY_CLIENT_ID)
  }
})
