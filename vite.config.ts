/*
 * @Description:
 * @Author: moumou.v1@foxmail.com
 * @Date: 2023-01-13 17:44:26
 * @LastEditTime: 2023-01-13 17:59:24
 * @LastEditors: moumou.v1@foxmail.com
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
