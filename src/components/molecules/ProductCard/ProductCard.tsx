import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IProduct, IVariant } from "services/products";
import { useTranslation, Trans } from "next-i18next";

import Button from "atoms/Button/Button";
import Image from "atoms/Image/Image";
import Price from "atoms/Price/Price";
import { ContextType, ProductContext } from "pages/_app";

import ProductCardLoad from "./ProductCard.load";

import { Card, Details, ProductName, LowerPrice } from "./ProductCard.styles";
import { getLowestPrice } from "utils/price/price";

interface ProductCardProps {
  product?: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const { t, ready } = useTranslation("common", { useSuspense: true });
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  if (!product) return <ProductCardLoad />;

  const { name } = product;
  const [selected, setSelected] = useState(false);

  function selectProduct(product: IProduct) {
    setProductsContext({
      product: { name: product.name, variants: product.variants },
      products: productsContext.products,
    });
  }

  function lowestPrice(variants: IVariant[]) {
    const prices = variants.map((v) => v.price);

    return prices.reduce(getLowestPrice);
  }

  return (
    <Card
      data-testid="product-card"
      aria-labelledby="product-name"
      defaultChecked={selected}
    >
      <Image
        src="https://images.prismic.io/barkyn/153c4252-8084-49b8-9931-3ec426cdd859_premium_box.png?auto=compress,format"
        width="230"
        height="214"
      />
      <Details>
        <ProductName id="product-name">
          <Trans i18nKey="products">{name}</Trans>
        </ProductName>
        <LowerPrice>
          <label htmlFor="">{t("from")}</label>
          <Price value={lowestPrice(product.variants)} />
        </LowerPrice>
      </Details>

      <Button type="button" onClick={() => selectProduct(product)}>
        <a href="#pre-checkout">{t("select")}</a>
      </Button>
    </Card>
  );
};

export default ProductCard;
