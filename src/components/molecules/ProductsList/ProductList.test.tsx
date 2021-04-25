import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/products";

import ProductsList from "./ProductsList";

describe("<ProductCard />", () => {
  test("it should mount", () => {
    testRender(<ProductsList products={mock}></ProductsList>);

    const card = screen.getAllByTestId("product-card");

    expect(card[0]).toBeInTheDocument();
  });

  test("it should render the load version of the card", () => {
    const { asFragment } = render(<ProductsList />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(
      <ProductsList products={mock}></ProductsList>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
