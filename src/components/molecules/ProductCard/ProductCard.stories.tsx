/* eslint-disable */
import React from "react";
import { storiesOf } from "@storybook/react";

import product from "../../../tests/__mocks__/product";

import ProductCard from "./ProductCard";

storiesOf("ProductCard", module).add("default", () => (
  <ProductCard product={product}></ProductCard>
));
