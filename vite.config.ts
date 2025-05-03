import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
    build: {
    target: 'esnext', // 确保使用 esm
    minify: false, // 可选，根据需要决定是否最小化
  }
});
