import React, { useContext, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import { OrderProps } from "pages/_app";

import Image from "atoms/Image/Image";
import Price from "atoms/Price/Price";
import Button from "components/atoms/Button/Button";
import DetailsCardLoad from "./DetailsCard.load";

import { Card, Details, Shipping } from "./DetailsCard.styles";

interface DetailsCardProps {
  product?: OrderProps;
  isComplete?: boolean;
}

const DetailsCard = ({ product, isComplete }: DetailsCardProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  if (!product) return <DetailsCardLoad />;

  return (
    <Card data-testid="details-card">
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
        {product?.shipping && !isComplete && (
          <Button type="button" onClick={() => router.push("success")}>
            {t("close")}
          </Button>
        )}
      </Details>
    </Card>
  );
};

export default DetailsCard;
