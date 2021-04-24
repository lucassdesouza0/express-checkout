import styled from "@emotion/styled";

import mq from "utils/queries";

export const Card = styled("div")`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  padding: 10px;
  margin: 10px 10px;
  max-width: 250px;
  max-height: 398px;
  border-radius: 10px;
  background-color: ${(props) => (props.defaultChecked ? "#5f2eff" : "#fff")};
  color: ${(props) => (props.defaultChecked ? "#fff" : "inherit")};
  box-shadow: 2px 2px 10px 10px #eee;
  cursor: grab;

  ${mq["sm"]} {
    margin: 20px 20px;
  }
`;

export const Details = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 10px;
`;

export const ProductName = styled("p")`
  flex: 1;
  max-width: 100%;
  font-size: 18px;
  font-weight: 400;
`;

export const LowerPrice = styled("div")`
  flex: 1;
  font-size: 18px;
  line-height: 20px;
`;
