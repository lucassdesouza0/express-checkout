import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import mock from "../../../tests/mocks/product";

import ProductCard from "./ProductCard";

describe("<ProductCard />", () => {
  test("it should mount", () => {
    render(<ProductCard product={mock}></ProductCard>);

    const card = screen.getByTestId("Card");

    expect(card).toBeInTheDocument();
  });

  test("snapshot", () => {
    const { asFragment } = render(<ProductCard product={mock}></ProductCard>);
    expect(asFragment()).toMatchSnapshot();
  });
});
