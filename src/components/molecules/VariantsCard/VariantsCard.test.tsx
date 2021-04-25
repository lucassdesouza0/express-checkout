import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/product";

import VariantsCard from "./VariantsCard";

describe("<ProductCard />", () => {
  test("it should mount", () => {
    testRender(<VariantsCard product={mock}></VariantsCard>);

    const card = screen.getAllByTestId("variants-card");

    expect(card[0]).toBeInTheDocument();
  });

  test("it should render the load version of the card", () => {
    const { asFragment } = render(<VariantsCard />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<VariantsCard product={mock}></VariantsCard>);
    expect(asFragment()).toMatchSnapshot();
  });
});
