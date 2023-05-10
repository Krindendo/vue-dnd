"use strict";

module.exports = {
  bracketSpacing: false,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: "es5",
  printWidth: 80,
  parser: "flow",
  arrowParens: "avoid",
  overrides: [
    {
      files: [
        "packages/*/*.js",
        // Source files
        "packages/*/src/**/*.js",
        "packages/shared/**/*.js",
        "scripts/rollup/shims/**/*.js",
      ],
      options: {
        trailingComma: "all",
      },
    },
  ],
};
