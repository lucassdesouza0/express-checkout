import React from "react";

import { SImage } from "./Image.styles";

interface ImageProps {
  src: string;
  width: string;
  height: string;
}

const Image = ({ src, width = "230", height = "214" }: ImageProps) => {
  return <SImage src={src} width={width} height={height} data-testid="image" />;
};

export default Image;
