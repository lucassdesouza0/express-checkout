import React, { useContext, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ContextType, ProductContext } from "pages/_app";

import Form from "components/molecules/Form/Form";
import DetailsCard from "molecules/DetailsCard/DetailsCard";
import SectionHeader from "atoms/SectionHeader/SectionHeader";

import {
  CheckoutContainer,
  BottomDetails,
  Section,
} from "./CheckoutSection.styles";

const CheckoutSection = () => {
  const { t } = useTranslation("common");
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  useEffect(() => {}, [productsContext]);

  return (
    <CheckoutContainer>
      <SectionHeader title={t("checkout-header")} />

      <Section>
        {!productsContext?.product?.shipping &&
          !productsContext?.isComplete && <Form />}
        {productsContext?.product && (
          <DetailsCard product={productsContext.product} />
        )}
      </Section>
    </CheckoutContainer>
  );
};

export default CheckoutSection;
