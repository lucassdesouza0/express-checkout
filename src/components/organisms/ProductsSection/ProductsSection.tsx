import React, { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import { ContextType, ProductContext } from "pages/_app";
import { IProduct } from "services/products";

import ProductsList from "molecules/ProductsList/ProductsList";
import SectionHeader from "atoms/SectionHeader/SectionHeader";
const PreCheckout = dynamic(() => import("molecules/PreCheckout/PreCheckout"));

import { Section } from "./ProductsSection.styles";

interface ProductsSectionProps {
  products?: IProduct[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  const { t } = useTranslation("common");
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  useEffect(() => {
    setProductsContext({
      ...productsContext,
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
