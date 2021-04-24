import React from "react";
import Skeleton from "react-loading-skeleton";

import Button from "atoms/Button/Button";

import { Card, Details, ProductName, LowerPrice } from "./ProductCard.styles";

const ProductCard = () => {
  return (
    <Card data-testid="card" aria-labelledby="product-name">
      <Skeleton width={230} height={214} />
      <Details>
        <ProductName id="product-name">
          <Skeleton />
        </ProductName>

        <LowerPrice>
          <Skeleton />
        </LowerPrice>
      </Details>

      <Button type="button">
        <Skeleton />
      </Button>
    </Card>
  );
};

export default ProductCard;
