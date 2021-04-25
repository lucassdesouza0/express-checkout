import styled from "@emotion/styled";
import SectionHeader from "./SectionHeader";
import mq from "utils/queries";

export const Header = styled("h2")`
  padding: 20px 0;
  background-color: rgb(255, 231, 131);
  font-size: 16px;
  color: #555;
  text-align: center;
  font-weight: 500;
  box-shadow: 2px 2px 5px 5px #eee;

  ${mq["md"]} {
    padding: 10px 0;
  }
`;
