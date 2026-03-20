import styled from "styled-components";

const Button = styled.button`
  background-color: #4682b4;
  border: 1px solid #38678f;
  color: white;
  cursor: pointer;
  font-size: 1.6em;
  font-weight: bold;
  letter-spacing: 0.03em;
  margin: 0;
  padding: 0.4em 0.8em;
  transition: background-color 200ms;
  vertical-align: middle;

  &:hover {
    background-color: #38678f;
  }
`;

export default Button;
