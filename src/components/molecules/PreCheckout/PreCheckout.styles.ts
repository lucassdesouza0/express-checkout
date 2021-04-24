import styled from "@emotion/styled";

import mq from "utils/queries";

export const PreCheckoutContainer = styled("div")`
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  overflow-y: auto;
  width: 100vw;
  box-shadow: 2px 2px 10px 10px #eee;
`;

export const Section = styled("div")`
  padding: 10px;

  button {
    width: 250px;
    align-self: center;
  }
`;
