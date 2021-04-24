import styled from "@emotion/styled";

import mq from "utils/queries";

export const SImage = styled("img")`
  border-radius: 5px;
  border: 1px solid #eee;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
`;
