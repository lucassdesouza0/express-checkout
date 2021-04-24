const i18nextHttpBackend = require("i18next-http-backend").default;

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
  },
  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: true,
  },
  initImmediate: false,
  use: process.browser ? [i18nextHttpBackend] : [],
};
