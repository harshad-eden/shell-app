import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      federation({
        name: "shell",
        remotes: {
          salesPortal: env.VITE_SALES_PORTAL_URL,
          underwriterPortal: env.VITE_UNDERWRITER_PORTAL_URL,
          productConfig: env.VITE_PRODUCT_CONFIG_URL,
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
  };
});
