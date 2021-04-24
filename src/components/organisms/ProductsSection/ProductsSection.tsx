import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";

import { ContextType, ProductContext, ContextProps } from "pages/_app";

import ProductsList from "molecules/ProductsList/ProductsList";
import PreCheckout from "molecules/PreCheckout/PreCheckout";
import SectionHeader from "atoms/SectionHeader/SectionHeader";

import { Section } from "./ProductsSection.styles";
import { useEffect } from "react";

const ProductsSection = ({ products }: ContextProps) => {
  const { t } = useTranslation("common");
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  useEffect(() => {
    setProductsContext({
      product: productsContext?.product,
      products: products,
    });
  }, []);

  const product = productsContext?.product;
  return (
    <Section data-testid="prod-section">
      <SectionHeader title={t("product-list-header")} />
      <ProductsList products={products} />
      {product?.name && <PreCheckout product={product} />}
    </Section>
  );
};

export default ProductsSection;
