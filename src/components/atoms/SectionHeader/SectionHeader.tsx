import React, { memo } from "react";

import { Header } from "./SectionHeader.styles";

interface SectionHeaderProps {
  title?: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return <Header>{title}</Header>;
};

export default memo(SectionHeader);
