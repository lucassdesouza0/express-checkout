import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/product";

import PreCheckout from "./PreCheckout";

describe("Button", () => {
  test("it should mount", () => {
    testRender(<PreCheckout product={mock} />);

    const section = screen.getByTestId("precheckout-section");

    expect(section).toBeInTheDocument();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<PreCheckout product={mock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
