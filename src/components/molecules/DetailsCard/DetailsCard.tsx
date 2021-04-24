import React, { useContext } from "react";

import Image from "atoms/Image/Image";
import Price from "atoms/Price/Price";
import { ContextType, ProductContext } from "pages/_app";

import DetailsCardLoad from "./DetailsCard.load";

import { Card, Details, Shipping } from "./DetailsCard.styles";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import Button from "components/atoms/Button/Button";

const DetailsCard = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;

  const product = productsContext?.product;

  if (!product) return <DetailsCardLoad />;

  return (
    <Card>
      <Image
        src="https://images.prismic.io/barkyn/153c4252-8084-49b8-9931-3ec426cdd859_premium_box.png?auto=compress,format"
        width="100"
        height="100"
      />
      <Details>
        <p>{product?.name}</p>
        <Price value={product?.datail?.price} />
        <Shipping>
          {product?.shipping && (
            <>
              <p> {t("address")}</p>
              <ul>
                <li>{product?.shipping?.address}</li>
                <li>{product?.shipping?.postalCode}</li>
              </ul>
            </>
          )}
        </Shipping>
        {productsContext?.product?.shipping && !productsContext?.isComplete && (
          <Button type="button" onClick={() => router.push("success")}>
            {t("close")}
          </Button>
        )}
      </Details>
    </Card>
  );
};

export default DetailsCard;
