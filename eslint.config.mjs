import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Design references and exported bundles — third-party/minified, not app source.
    "design/**",
    "Logo/**",
    "**/vendor/**",
    "**/*.min.js",
    "playwright-report/**",
    "test-results/**",
  ]),
]);

export default eslintConfig;
