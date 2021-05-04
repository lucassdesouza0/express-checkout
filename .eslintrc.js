module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: module,
  },
  ignorePatterns: [
    "node_modules/*",
    ".next/*",
    ".out/*",
    "!.prettierrc.js",
    "*.stories.ts",
    ".storybook/*",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest-dom/recommended",
  ],
  plugins: ["import", "testing-library", "jest-dom"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@babel/eslint-parser",
      rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "import/no-unresolved": "error",
        "testing-library/await-async-query": "error",
        "testing-library/no-await-sync-query": "error",
        "testing-library/no-debug": "warn",
        "testing-library/no-dom-import": "off",
        "jest-dom/prefer-checked": "error",
        "jest-dom/prefer-enabled-disabled": "error",
        "jest-dom/prefer-required": "error",
        "jest-dom/prefer-to-have-attribute": "error",
      },
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          node: {
            paths: ["src"],
          },
        },
        "import/extensions": [".ts", ".tsx"],
        "import/order": [
          "error",
          {
            groups: ["builtin", "external", "internal"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["react"],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
