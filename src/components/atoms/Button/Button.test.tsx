import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/product";

import Button from "./Button";

describe("Button", () => {
  test("it should mount", () => {
    testRender(<Button></Button>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<Button></Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
