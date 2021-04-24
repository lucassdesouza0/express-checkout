import styled from "@emotion/styled";

export const Card = styled("div")`
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  overflow-y: auto;
  margin: 10px;
  padding: 10px;
  box-shadow: 2px 2px 5px 5px #eee;
`;

export const Details = styled("div")`
  flex: 1;
  margin-left: 20px;
`;

export const ProductPrice = styled("div")`
  padding: 10px;
  margin-left: 10px;
`;

export const Shipping = styled("div")`
  margin: 30px 0;

  p {
    margin: none;
    font-weight: 500;
  }
`;
