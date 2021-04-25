import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/product";

import Selection from "./Selection";

describe("Button", () => {
  const selectItem = mock.variants[0].size;
  test("it should mount", () => {
    testRender(<Selection product={mock} />);

    const select = screen.getAllByTestId("select-option");

    expect(select[0]).toBeInTheDocument();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<Selection product={mock} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
