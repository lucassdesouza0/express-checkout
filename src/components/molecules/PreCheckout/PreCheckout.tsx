import React from "react";
import { useTranslation } from "next-i18next";

import SectionHeader from "atoms/SectionHeader/SectionHeader";
import DetailsCard from "molecules/DetailsCard/DetailsCard";
import VariantsCard from "molecules/VariantsCard/VariantsCard";
import { ProductContext, ProductProps } from "pages/_app";

import { PreCheckoutContainer, Section } from "./PreCheckout.styles";

export interface PreCheckoutProps {
  product?: ProductProps;
}

const PreCheckout = ({ product }: PreCheckoutProps) => {
  const { t } = useTranslation("common");

  if (!product) return <></>;

  return (
    <PreCheckoutContainer>
      <SectionHeader title={t("pre-checkout-header")} />
      <Section>
        <DetailsCard />
        <VariantsCard product={product} />
      </Section>
    </PreCheckoutContainer>
  );
};

export default PreCheckout;
