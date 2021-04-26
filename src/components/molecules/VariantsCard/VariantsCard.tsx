import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ContextProps, OrderProps } from "pages/_app";

import Selection from "atoms/Selection/Selection";
import Button from "atoms/Button/Button";

import { Card } from "./VariantsCard.styles";

export interface VariantsCardProps {
  product?: OrderProps;
}

const VariantsCard = ({ product }: VariantsCardProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Card data-testid="variants-card">
      <Selection product={product} />
    </Card>
  );
};

export default VariantsCard;
