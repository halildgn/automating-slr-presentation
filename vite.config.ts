import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react(), viteSingleFile()],
  clearScreen: false,
  build: {
    outDir: './dist',
  }
}));
