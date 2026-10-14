import { fixupConfigRules } from "@eslint/compat";
import nextConfig from "eslint-config-next";

export default [
  // Wrap and fix the legacy Next.js rules so they work in ESLint v10 flat config
  ...fixupConfigRules(nextConfig),

  {
    // Files to explicitly track
    files: ["src/**/*.{js,jsx,ts,tsx}"],

    // Folders to permanently ignore
    ignores: [".next/*", "node_modules/*", "out/*", "build/*"],

    rules: {
      "react/react-in-jsx-scope": "off", // Safe to turn off for React 19 / Next 16
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    }
  }
];
