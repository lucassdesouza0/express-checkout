import React from "react";
import { useTranslation } from "next-i18next";

import { SHeader, Title } from "./Header.styles";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <SHeader>
      <Title>{t("h1")}</Title>
    </SHeader>
  );
};

export default Header;
