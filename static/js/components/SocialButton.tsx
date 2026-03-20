import React from "react";
import styled from "styled-components";
import share, { Network } from "../lib/share";
import { ReactComponent as FacebookSVG } from "../images/icons/facebook.svg";
import { ReactComponent as TwitterSVG } from "../images/icons/twitter.svg";

interface Props {
  network: Network;
}

const SocialButton: React.FC<Props> = ({ network }) => {
  return (
    <Wrapper onClick={() => share(network)} network={network}>
      {network === "facebook" ? <FacebookSVG /> : <TwitterSVG />}
    </Wrapper>
  );
};

interface WrapperProps {
  network: Network;
  onClick: () => void;
}

const Wrapper = styled.button<WrapperProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  vertical-align: middle;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  svg {
    fill: ${({ network }) => (network === "facebook" ? "#3b5998" : "#55acee")};
    transition: fill 200ms;
    width: 60px;
  }

  &:hover svg {
    fill: ${({ network }) => (network === "facebook" ? "#263961" : "#1689e0")};
  }
`;

export default SocialButton;
