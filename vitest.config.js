import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // Elimanates the need to import (it, describe, expect) every time you write a test
    setupFiles: "test/setup.js", // Runs before each test file
  },
});
