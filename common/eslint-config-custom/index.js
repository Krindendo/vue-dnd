module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
      "turbo",
      "prettier",
      "plugin:vue/vue3-recommended",
      "standard-with-typescript",
      "plugin:@typescript-eslint/recommended",
    ],
    overrides: [
    ],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
  },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "vue"],
    rules: {
      "turbo/no-undeclared-env-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  };