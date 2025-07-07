import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      remotes: {
        salesPortal: "https://shell-sales-portal.vercel.app/assets/remoteEntry.js",
        underwriterPortal: "https://shell-underwriter-portal.vercel.app/assets/remoteEntry.js",
        productConfig: "https://shell-product-config.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3000,
  },
});
