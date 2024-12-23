import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    server: {
      host: '0.0.0.0',  // Permite que o Vite seja acessível em qualquer IP
      port: 3000,        // Porta opcional
    },
    plugins: [
      react(),
      VitePluginRadar({
        analytics: {
          id: env.VITE_GOOGLE_ANALYTICS_ID,
        },
      }),
    ],
  }
})
