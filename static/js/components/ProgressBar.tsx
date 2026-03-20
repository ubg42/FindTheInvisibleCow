import React from "react";
import styled from "styled-components";

interface Props {
  progress: number;
}

const Modal: React.FC<Props> = ({ progress }) => {
  return (
    <Wrapper>
      <Bar progress={progress} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #38678f;
`;

interface BarProps {
  progress: number;
}

const Bar = styled.div<BarProps>`
  background-color: #4682b4;
  height: 50px;
  width: ${props => `${props.progress * 100}%`};
`;

export default Modal;
