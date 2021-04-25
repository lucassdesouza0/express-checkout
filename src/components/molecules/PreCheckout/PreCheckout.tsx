import React from "react";
import { useTranslation } from "next-i18next";

import SectionHeader from "atoms/SectionHeader/SectionHeader";
import DetailsCard from "molecules/DetailsCard/DetailsCard";
import VariantsCard from "molecules/VariantsCard/VariantsCard";
import { ProductContext, ProductProps } from "pages/_app";

import { PreCheckoutContainer, Section } from "./PreCheckout.styles";
import { useEffect } from "react";

export interface PreCheckoutProps {
  product?: ProductProps;
}

const PreCheckout = ({ product }: PreCheckoutProps) => {
  const { t } = useTranslation("common");

  if (!product) return <></>;

  useEffect(() => {}, [product]);

  return (
    <PreCheckoutContainer data-testid="precheckout-section">
      <SectionHeader title={t("pre-checkout-header")} />
      <Section>
        <DetailsCard product={product} />
        <VariantsCard product={product} />
      </Section>
    </PreCheckoutContainer>
  );
};

export default PreCheckout;
