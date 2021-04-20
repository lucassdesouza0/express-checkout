module.exports = {
  "**/*.ts?(x)": () => "yarn type-check",
  "**/*.(ts|js)?(x)": () => `yarn lint:ts:fix `,
  "**/*.styles.(ts)": () => `yarn lint:styles:fix`,
};
