import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";

import ErrorText from "./ErrorText";

describe("Button", () => {
  const text = "404 - Page Not Found";
  test("it should mount", () => {
    testRender(<ErrorText>{text}</ErrorText>);

    const button = screen.getByRole("h1");

    expect(button).toBeInTheDocument();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<ErrorText>{text}</ErrorText>);
    expect(asFragment()).toMatchSnapshot();
  });
});
