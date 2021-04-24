import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ContextProps, ProductProps } from "pages/_app";

import Selection from "atoms/Selection/Selection";
import Button from "atoms/Button/Button";

import { Card } from "./VariantsCard.styles";

export interface VariantsCardProps {
  product?: ProductProps;
}

const VariantsCard = ({ product }: VariantsCardProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Card>
      <Selection product={product} />
      <Button
        type="button"
        onClick={() => router.push("checkout")}
        disabled={false}
      >
        <a href="/checkout">{t("kart")}</a>
      </Button>
    </Card>
  );
};

export default VariantsCard;
