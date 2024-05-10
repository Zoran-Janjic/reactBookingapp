import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    languageOptions: { globals: globals.browser },
    extends: "airbnb-base",
    rules: {
      quotes: ["error", "double"],
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
