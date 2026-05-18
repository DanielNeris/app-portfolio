import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
