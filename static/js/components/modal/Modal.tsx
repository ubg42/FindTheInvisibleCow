import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  wide?: boolean;
}

const Modal: React.FC<Props> = ({ children, wide = false }) => {
  return <Wrapper wide={wide}>{children}</Wrapper>;
};

interface WrapperProps {
  wide: boolean;
}

const margin = "1em";
const Wrapper = styled.div<WrapperProps>`
  background: white;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2);
  left: 0;
  margin: ${margin} 0;
  max-width: calc(100vw - ${margin} * 2);
  overflow: hidden;
  padding: 1.6em;
  position: static;
  right: 0;
  top: 40%;
  transform: none;
  transition: transform 0.5s, opacity 0.5s;
  width: ${({ wide }) => (wide ? "750px" : "600px")};

  h1 {
    margin-top: 0;
  }
`;

export default Modal;
