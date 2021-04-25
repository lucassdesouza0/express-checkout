import React, { useContext } from "react";
import { useTranslation } from "next-i18next";

import { ProductProps } from "services/products";
import ProductCard from "molecules/ProductCard/ProductCard";
import ProductCardLoading from "molecules/ProductCard/ProductCard.load";
import SectionHeader from "atoms/SectionHeader/SectionHeader";

import { List } from "./ProductsList.styles";

interface ProductsListProps {
  products?: ProductProps[] | null;
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
