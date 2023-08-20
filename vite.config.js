import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    manifest: true,
    outDir: "build",
  },
  server: {
    port: 5001,
    open: true,
  },
});
