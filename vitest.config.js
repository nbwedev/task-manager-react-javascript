import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // Elimanates the need to import (it, describe, expect) every time you write a test
    setupFiles: "src/test/setup.js", // Runs before each test file. Need to properly declare the correct address of the file
  },
});
