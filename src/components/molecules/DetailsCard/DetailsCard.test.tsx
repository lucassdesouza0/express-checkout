import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";
import ProductContext from "context/product";

import mock from "../../../tests/__mocks__/product";

import DetailsCard from "./DetailsCard";

describe("<ProductCard />", () => {
  const productsContext = { product: mock };
  test("it should mount", () => {
    testRender(<DetailsCard product={mock} />);

    const card = screen.getAllByTestId("details-card");

    expect(card[0]).toBeInTheDocument();
  });

  test("it should render the load version of the card", () => {
    const { asFragment } = render(<DetailsCard />);
    expect(asFragment()).toMatchSnapshot();
  });

  //   test("it should match snapshot", () => {
  //     const { asFragment } = render(<DetailsCard product={mock}></DetailsCard>);
  //     expect(asFragment()).toMatchSnapshot();
  //   });
});
