import type { UserConfig } from "vite";

export default {
  // ...
  build: {
    minify: false,
    rollupOptions: {
      input: {
        "path1/index": "html/path1/index.html",
      },
    },
  },
} satisfies UserConfig;
