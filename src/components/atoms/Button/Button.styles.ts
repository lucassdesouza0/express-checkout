import styled from "@emotion/styled";

export const Button = styled("button")`
  background-color:
    ${(props) =>
    props.type === "button" ? "#eee" : "#5f2eff"};
  color: ${(props) => (props.type === "button" ? "#5f2eff" : "#eee")};

  :hover {
    background-color:
      ${(props) =>
      props.type === "button" ? "#c8c8c8" : "#3500e1"};
  }

  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export default Button;
