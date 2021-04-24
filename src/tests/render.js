import React, { Suspense } from "react";
import i18n from "../../i18n-test";
import { I18nextProvider } from "react-i18next";
import { render as rtlRender } from "@testing-library/react";

export default (ui) => ({
  ...rtlRender(
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading translations...</div>}>{ui}</Suspense>
    </I18nextProvider>
  ),
});
