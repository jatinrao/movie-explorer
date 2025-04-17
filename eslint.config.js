import eslintPluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintPluginTypeScript,
    },
    rules: {
      // ESLint recommended
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginTypeScript.configs.recommended.rules,

      // React specific
      "react/react-in-jsx-scope": "off", // For React 17+ with automatic JSX
      "react/prop-types": "off",

      // Prettier
      "prettier/prettier": "error",
    },
  },
  {
    ignores: [
      "babel.config.js",
      "eslint.config.js",
      "webpack.config.js",
      ".eslintrc.js",
      "dist/**",
      "node_modules/**",
    ],
  },
];
