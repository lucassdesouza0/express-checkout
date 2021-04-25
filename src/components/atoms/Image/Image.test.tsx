import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import testRender from "../../../tests/render";

import mock from "../../../tests/__mocks__/product";

import Image from "./Image";

describe("Button", () => {
  const imgUrl =
    "https://images.prismic.io/barkyn/153c4252-8084-49b8-9931-3ec426cdd859_premium_box.png?auto=compress,format";
  test("it should mount", () => {
    testRender(<Image src={imgUrl} />);

    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
  });

  test("it should match snapshot", () => {
    const { asFragment } = render(<Image src={imgUrl} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
