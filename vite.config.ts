import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/learn-firebase-with-vite/",
  plugins: [react()],
});
