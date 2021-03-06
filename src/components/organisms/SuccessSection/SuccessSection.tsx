import React, { useContext, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { ContextType, ProductContext } from "pages/_app";
import { useRouter } from "next/router";

import SectionHeader from "components/atoms/SectionHeader/SectionHeader";
import DetailsCard from "components/molecules/DetailsCard/DetailsCard";

import { Section } from "./SuccessSection.styles";

const SuccessSection = () => {
  const { t } = useTranslation("common");
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  const product = productsContext?.product;
  const isComplete = productsContext?.isComplete;

  useEffect(() => {
    product &&
      setProductsContext({
        ...productsContext,
        isComplete: true,
      });
  }, []);

  return (
    <Section>
      <SectionHeader title={t("success-header")} />
      <DetailsCard product={product} isComplete={isComplete} />
    </Section>
  );
};

export default SuccessSection;
