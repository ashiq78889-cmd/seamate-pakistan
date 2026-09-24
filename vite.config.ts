import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "SeaMate Pakistan",
        short_name: "SeaMate",
        description: "Marine GPS and navigation app for Pakistan",
        theme_color: "#062c43",
        background_color: "#061923",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        scope: "/"
      },

      workbox: {
        cleanupOutdatedCaches: true
      }
    })
  ]
});
