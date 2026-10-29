import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base: the site works at https://hamza-ben-aicha.github.io/ and in any sub-folder.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
