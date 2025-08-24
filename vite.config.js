import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ✅ Important for correct asset paths on Vercel
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/global.css";` // Only if using SCSS
      }
    }
  }
});
