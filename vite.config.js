import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000, // Your React app's port
  },

   // "start": "react-scripts start --host 0.0.0.0", isko package.json me paste krna he agar website ko mobile me dkhna he to 
})
