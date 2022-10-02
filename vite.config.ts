import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

const isPROD: boolean = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  base: isPROD ? "/learn-firebase-with-vite/" : "/",
  plugins: [preact()],
});
