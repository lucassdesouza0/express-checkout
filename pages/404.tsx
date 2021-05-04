import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "atoms/Header/Header";
import ErrorText from "atoms/ErrorText/ErrorText";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "price"])),
    },
  };
}

export default function Custom404() {
  return (
    <>
      <Header />
      <ErrorText>404 - Page Not Found</ErrorText>
    </>
  );
}
