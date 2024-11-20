import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/CTo-November-Code-Jam-2024/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
