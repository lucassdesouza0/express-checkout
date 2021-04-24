import i18n from "i18next";
import commoEn from "./public/locales/en/common.json";
import priceEn from "./public/locales/en/price.json";
import commoPt from "./public/locales/pt/common.json";
import pricePt from "./public/locales/pt/price.json";

i18n.init({
  fallbackLng: "cimode",
  debug: false,
  initImmediate: false,
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  resources: {
    en: {
      commom: commoEn,
      price: priceEn,
    },
    pt: {
      commom: commoPt,
      price: pricePt,
    },
  },
  react: {
    useSuspense: true,
  },
});

export default i18n;
