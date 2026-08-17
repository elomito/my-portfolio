import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
<<<<<<< Updated upstream
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    nitro: {
      preset: "netlify"
    }
=======
  plugins: [
    tanstackStart({
      // Preserve the custom SSR wrapper that handles catastrophic SSR failures.
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
    netlify(),
  ],
>>>>>>> Stashed changes
});

