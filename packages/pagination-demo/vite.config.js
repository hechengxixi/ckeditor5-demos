// vite.config.js
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

import { defineConfig } from "vite";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    ckeditor5({ theme: require.resolve("@ckeditor/ckeditor5-theme-lark") }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "",
    lib: {
      entry: resolve(__dirname, "./main.ts"),
      name: "demo",
      fileName: "demo",
    },
  },
});
