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
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:import",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@babel/eslint-parser",
      settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        react: { version: "detect" },
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
      ],
      rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warning"],
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "import/no-unresolved": "error",
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
      },
    },
  ],
};
