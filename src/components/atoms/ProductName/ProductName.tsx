import React from "react";
import { useTranslation } from "next-i18next";

interface ProductNameProps {
  name: string;
  id: string;
}

const ProductName = ({ name, id }: ProductNameProps) => {
  const { t } = useTranslation("products");

  return <>{t(`${name}`)}</>;
};

export default ProductName;
