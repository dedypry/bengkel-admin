import path from "path";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import rakkas from "rakkasjs/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(),tsconfigPaths(), rakkas()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
