import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import angularEslintPlugin from "@angular-eslint/eslint-plugin"; // Correct import for Angular ESLint plugin

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Apply to all JavaScript, TypeScript, and related files
  { files: ["**/*.{js,mjs,cjs,ts}"] },

  // Additional rule for `.js` files to treat them as script files
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },

  // Define browser global variables
  { languageOptions: { globals: globals.browser } },

  // Base configuration for JavaScript (ESLint recommended rules)
  pluginJs.configs.recommended,

  // TypeScript-specific ESLint configuration
  ...tseslint.configs.recommended,

  // Configuration for Angular-specific rules
  {
    plugins: {
      "@angular-eslint": angularEslintPlugin, // Directly use the plugin
    },
    rules: {
      // Angular-specific rules
      "@angular-eslint/no-empty-lifecycle-method": "warn", // Warn about empty lifecycle methods
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" }, // Component selector rule
      ],
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" }, // Directive selector rule
      ],
    },
  },
];
