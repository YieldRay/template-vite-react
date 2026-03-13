import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: "vite",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "react-vendor",
              test(id) {
                new Set(["react", "react-dom"]).has(id);
              },
            },
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
