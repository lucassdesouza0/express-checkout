/* tslint:disable */
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { Section, SelectionSection, Select } from "./Selection.styles";
import { ContextType, ProductContext, ProductProps } from "pages/_app";

interface SelectionProps {
  product?: ProductProps;
}

const Selection = ({ product }: SelectionProps) => {
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;
  const { t } = useTranslation("common");

  const variants = product?.variants;
  console.log("variants: ", variants);

  useEffect(() => {
    price &&
      size &&
      setProductsContext({
        product: {
          name: product?.name,
          variants: product?.variants,
          datail: { size: size, price: price },
        },
        products: productsContext.products,
      });
  }, [size, price]);

  function handleSizeChange(event: React.ChangeEvent<any>): void {
    const variant = variants?.[event.target.value];

    if (variant) {
      setSize(variant?.size);
      setPrice(variant?.price);
    }
    console.log("variant?.price: ", variant?.price);
    console.log(price);
  }

  return (
    <Section>
      <SelectionSection>
        <label>{t("packing-size")}:</label>
        <Select name="ages" onChange={handleSizeChange} defaultValue={"sizes"}>
          <option value="sizes" disabled data-testid="select-option">
            sizes
          </option>
          {variants?.map((a, index) => (
            <option
              label={a.size}
              value={index}
              key={`${a}-${index}`}
              data-testid={`select-option-${a.size}`}
            >
              {a.size}
            </option>
          ))}
        </Select>
      </SelectionSection>
    </Section>
  );
};

export default Selection;
