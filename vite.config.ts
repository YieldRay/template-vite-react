import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { defineConfig } from "vite";
import tsPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: "vite",
    }),
    react(),
    tsPaths(),
    tailwindcss(),
  ],
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
