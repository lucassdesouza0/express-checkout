module.exports = {
  "**/*.ts?(x)": () => "yarn type-check",
  "**/*.(ts|js)?(x)": (filenames) => `yarn lint:ts:fix ${filenames.join(" ")}`,
  "**/*.styles.(ts)": (filenames) =>
    `yarn lint:styles:fix ${filenames.join(" ")}`,
};
