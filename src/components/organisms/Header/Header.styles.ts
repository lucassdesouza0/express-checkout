import styled from "@emotion/styled";

import mq from "utils/queries";

export const SHeader = styled("header")`
  width: 100%;
  margin: 0 0 20px 0;
  padding: 30px 10px;
  background-color: #5f2eff;
  text-align: center;
  box-shadow: 2px 10px 10px 5px #eee;

  ${mq["md"]} {
    padding: 20px 10px;
  }
`;

export const Title = styled("h1")`
  margin: 0 auto;
  font-size: 24px;
  color: #fff;

  ${mq["md"]} {
    font-size: 24px;
  }
`;
