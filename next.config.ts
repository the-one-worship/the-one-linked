import type { NextConfig } from 'next'

const basePath = process.env.BASE_PATH || ''

export default {
  basePath,
  assetPrefix: basePath,
  output: 'export',
  typedRoutes: true,
} satisfies NextConfig
