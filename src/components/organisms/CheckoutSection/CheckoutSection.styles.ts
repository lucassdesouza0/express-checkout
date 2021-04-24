import styled from "@emotion/styled";

import mq from "utils/queries";

export const CheckoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mq["sm"]} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const BottomDetails = styled("div")`
  position: relative;
  bottom: 0;
`;
