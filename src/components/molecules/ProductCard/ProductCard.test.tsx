import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/product";

import ProductCard from "./ProductCard";

describe("<ProductCard />", () => {
  test("it should mount", () => {
    testRender(<ProductCard product={mock}></ProductCard>);

    const card = screen.getByTestId("product-card");

    expect(card).toBeInTheDocument();
  });

  test("it should render the load version of the card", () => {
    const { asFragment } = render(<ProductCard></ProductCard>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<ProductCard product={mock}></ProductCard>);
    expect(asFragment()).toMatchSnapshot();
  });
});
