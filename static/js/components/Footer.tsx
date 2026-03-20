/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import Locale from "./Locale";
import { useT } from "../context/i18n";
import track from "../lib/track";
import FooterAdRotator from "./FooterAdRotator";

const Footer: React.FC = () => {
  const t = useT();
  const [credits, setCredits] = useState(false);

  return (
    <Wrapper>
      <Left>
        <Locale />
      </Left>
      <Middle>
        <FooterAdRotator />
      </Middle>
      <Right>
        {credits ? (
          <>
            <span
              dangerouslySetInnerHTML={{
                __html: t("footer.credits"),
              }}
            />{" "}
            &bull;{" "}
            <a
              onClick={() => {
                setCredits(false);
                track("Footer", "Credits", "Close");
              }}
            >
              &times;
            </a>
          </>
        ) : (
          <a
            onClick={() => {
              setCredits(true);
              track("Footer", "Credits", "Open");
            }}
          >
            {t("footer.creditsButton")}
          </a>
        )}{" "}
        &bull;{" "}
        <a
          href="/privacy.html"
          onClick={() => track("Footer", "PrivacyPolicy", "Click")}
          target="_blank"
          dangerouslySetInnerHTML={{
            __html: t("footer.privacyPolicyButton"),
          }}
        />{" "}
        &bull;{" "}
        <span
          dangerouslySetInnerHTML={{
            __html: t("footer.byScriptist"),
          }}
        />
      </Right>
    </Wrapper>
  );
};

const Left = styled.div`
  flex-basis: 1fr;
  grid-area: left;
`;

const Middle = styled.div`
  display: none;
  grid-area: middle;

  @media screen and (min-width: 1000px) and (min-height: 650px) {
    display: block;
  }
`;

const Right = styled.p`
  flex-basis: 1fr;
  grid-area: right;
  margin: 0;
  text-align: right;
`;

const Wrapper = styled.footer`
  align-items: end;
  bottom: 5px;
  display: grid;
  font-size: 14px;
  gap: 16px;
  grid-template:
    "left middle right"
    / 1fr auto 1fr;
  left: 8px;
  position: fixed;
  right: 8px;
`;

export default Footer;
