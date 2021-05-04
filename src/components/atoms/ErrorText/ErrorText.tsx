import React, { memo, ReactNode } from "react";

import { Text } from "./ErrorText.styles";

interface ErrorTextProps {
  children: ReactNode;
}

const ErrorText = ({ children }: ErrorTextProps) => {
  return <Text>{children}</Text>;
};

export default memo(ErrorText);
