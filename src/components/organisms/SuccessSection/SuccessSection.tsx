import React, { useContext, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { ContextType, ProductContext } from "pages/_app";
import { useRouter } from "next/router";

import SectionHeader from "components/atoms/SectionHeader/SectionHeader";
import DetailsCard from "components/molecules/DetailsCard/DetailsCard";

import { Section } from "./SuccessSection.styles";

const SuccessSection = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  const product = productsContext?.product;

  useEffect(() => {
    setTimeout(
      () =>
        !product
          ? router.push("/")
          : setProductsContext({
              ...productsContext,
              isComplete: true,
            }),
      2000
    );
  }, []);

  return (
    <Section>
      <SectionHeader title={t("success-header")} />
      <DetailsCard product={product} />
    </Section>
  );
};

export default SuccessSection;
