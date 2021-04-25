/* tslint:disable */
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { Section, SelectionSection, Select } from "./Selection.styles";
import {
  ContextType,
  ProductContext,
  ProductProps,
  SelectedProductProps,
} from "pages/_app";
import { Variant } from "@testing-library/react";

interface SelectionProps {
  product?: ProductProps;
}

const Selection = ({ product }: SelectionProps) => {
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;
  const { t } = useTranslation("common");
  const [details, setDetails] = useState<SelectedProductProps>({});
  const [complete, setcomplete] = useState(false);

  const variants = product?.variants;

  useEffect(() => {
    setProductsContext({
      product: {
        ...product,
        datail: { size: details?.size, price: details?.price },
      },
      ...productsContext,
    });
  }, [complete]);

  function handleSizeChange(event: React.ChangeEvent<any>): void {
    const variant = variants?.[event.target.value];
    setDetails({ size: variant?.size, price: variant?.price });
  }

  function handleQuantityChange(event: React.ChangeEvent<any>): void {}

  return (
    <Section>
      <SelectionSection>
        <label>{t("packing-size")}:</label>
        <Select name="sizes" onChange={handleSizeChange} defaultValue={"sizes"}>
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
        <form
          name="quantity"
          onChange={handleQuantityChange}
          defaultValue={"sizes"}
        >
          <label htmlFor="quantity" data-testid="select-option">
            quantity
          </label>

          <input
            type="number"
            name="quantity"
            min="1"
            onChange={handleQuantityChange}
          />
        </form>
      </SelectionSection>
    </Section>
  );
};

export default Selection;
