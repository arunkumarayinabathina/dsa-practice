import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dsa-practice/', // Replace 'repository-name' with your actual repository name
});
