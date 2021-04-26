/* tslint:disable */
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ContextType, ProductContext, OrderProps } from "pages/_app";

import Button from "atoms/Button/Button";
import { Section, SelectionSection, Select, Input } from "./Selection.styles";

interface SelectionProps {
  product?: OrderProps;
}

const Selection = ({ product }: SelectionProps) => {
  const [size, setSize] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [quantity, setQuantity] = useState<number>(1);
  const { productsContext, setProductsContext } = useContext(
    ProductContext
  ) as ContextType;
  const router = useRouter();
  const { t } = useTranslation("common");

  const variants = product?.variants;

  useEffect(() => {
    if (price && size)
      setProductsContext({
        product: {
          name: product?.name,
          variants: product?.variants,
          datail: { size: size, price: quantity * price, quantity: quantity },
        },
        products: productsContext.products,
      });
  }, [size, price, quantity]);

  function handleSizeChange(event: React.ChangeEvent<any>): void {
    let value;
    if (variants) {
      value = variants[event.target.value];
      setSize(value.size);
      setPrice(value?.price);
    }
  }

  function handleQuantityChange(event: React.ChangeEvent<any>): void {
    setQuantity(event.target.value);
  }

  return (
    <Section>
      <SelectionSection>
        <label>{t("packing-size")}</label>
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
        <form
          name="quantity"
          onChange={handleQuantityChange}
          defaultValue={"sizes"}
        >
          <Input
            type="number"
            name="quantity"
            min="1"
            disabled={!price && !size}
          />
          <label htmlFor="quantity" data-testid="select-option">
            (unit)
          </label>
        </form>
        <Button
          type="button"
          onClick={() => router.push("checkout")}
          disabled={false}
        >
          <Link href="/checkout">{t("kart")}</Link>
        </Button>
      </SelectionSection>
    </Section>
  );
};

export default Selection;
