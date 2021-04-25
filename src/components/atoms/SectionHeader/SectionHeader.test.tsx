import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/product";

import SectionHeader from "./SectionHeader";

describe("Button", () => {
  const title = "Header Title";
  test("it should mount", () => {
    testRender(<SectionHeader title={title} />);

    const header = screen.getByText(title);

    expect(header).toBeInTheDocument();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<SectionHeader title={title} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
