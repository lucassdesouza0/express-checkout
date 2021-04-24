import styled from "@emotion/styled";

import mq from "utils/queries";

export const FormSection = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 10px;
`;

export const SForm = styled("form")`
  display: flex;
  flex-direction: column wrap;
  justify-content: center;
  align-content: center;
  padding: 10px;
  box-shadow: 2px 2px 5px 5px #eee;

  input {
    padding: 10px;
    max-width: 250px;
  }

  button {
    flex: 1;
  }
`;

export const SField = styled("div")`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;

  label {
    padding: 10px;
    font-weight: 500;
  }
`;
