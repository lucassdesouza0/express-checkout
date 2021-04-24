import React from "react";
import { useTranslation } from "next-i18next";

interface PriceProps {
  value?: string;
}

const Price = ({ value }: PriceProps) => {
  const { t, ready } = useTranslation("price");
  const price = `${t("symbol")} ${value ? value : 0}`;

  return <>{ready && price}</>;
};

export default Price;
