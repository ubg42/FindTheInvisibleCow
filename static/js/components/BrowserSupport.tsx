import React from "react";
import styled from "styled-components";
import { useT } from "../context/i18n";

interface Props {
  supported: boolean;
}

const BrowserSupport: React.FC<Props> = ({ supported }) => {
  const t = useT();

  return (
    <Wrapper>
      {supported && `${t("support.possiblyUnsupported")} `}
      <span dangerouslySetInnerHTML={{ __html: t("support.browsers") }} />
    </Wrapper>
  );
};

const Wrapper = styled.p`
  font-size: 0.875em;
  margin: 2em 0 0;
`;

export default BrowserSupport;
