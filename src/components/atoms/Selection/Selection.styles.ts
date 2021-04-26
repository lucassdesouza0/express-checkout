import styled from "@emotion/styled";

export const Section = styled("div")`
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
`;

export const SelectionSection = styled("div")`
  display: flex;
  flex-flow: column wrap;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
`;

export const Select = styled("select")`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  border: none;
  box-shadow: 2px 2px 10px 5px #eee;
  margin: 10px 10px;

  :focus {
    outline: none;
  }
`;

export const Input = styled("input")`
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? "#dddddd" : "transparent")};
  font-size: 16px;
  border: none;
  box-shadow: 2px 2px 10px 5px #eee;
  margin: 0 10px;
  max-width: 50px;
`;
