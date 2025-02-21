import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/TrafficMadnessTest/",
  build: { outDir: path.resolve(__dirname, "dist") },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@header": path.resolve(__dirname, "src/components/header"),
      "@components": path.resolve(__dirname, "src/components"),
      "@nav-bar": path.resolve(__dirname, "src/components/nav-bar"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
