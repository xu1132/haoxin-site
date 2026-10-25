import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 用相对 base：本地 dev（/）和 GitHub Pages 项目站点（/haoxin-site/）都能直接跑，
// 不需要按环境切 base，也不用在这里读 process.env。
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5273,
    host: true,
  },
})
