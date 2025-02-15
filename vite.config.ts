import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@elements": "/src/elements",
      "@constants": "/src/constants",
      "@interfaces": "/src/interfaces",
      "@hooks": "/src/hooks",
      "@layout": "/src/layout",
      "@styles": "/src/styles",
      "@pages": "/src/pages",
      "@store": "/src/store",
    },
  },
});
