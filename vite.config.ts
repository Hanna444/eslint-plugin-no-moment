import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./eslint.setup.js"],
  },
});
