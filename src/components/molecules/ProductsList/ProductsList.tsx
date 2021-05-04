import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import { IProduct } from "services/products";
import ProductCard from "molecules/ProductCard/ProductCard";
const ProductCardLoading = dynamic(
  () => import("molecules/ProductCard/ProductCard.load")
);

import { List } from "./ProductsList.styles";

interface ProductsListProps {
  products?: IProduct[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  const { t } = useTranslation("common");

  return (
    <>
      <List data-testid="list">
        {!products
          ? [0, 1, 2].map((i) => <ProductCardLoading key={i} />)
          : products?.map((p, index) => (
              <ProductCard product={p} key={`${p.name}-${index}`} />
            ))}
      </List>
    </>
  );
};

export default ProductsList;
