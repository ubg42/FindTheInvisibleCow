import React from "react";
import styled from "styled-components";
import { useT } from "../context/i18n";
import { useFticState } from "../context/ftic";
import share from "../lib/share";

const Stats: React.FC = () => {
  const t = useT();
  const state = useFticState();

  return (
    <Wrapper>
      <Line>
        <TwitterButton onClick={() => share("twitter")}>
          {t("social.shareOnTwitter")}
        </TwitterButton>
      </Line>
      <Line>
        <span>{t("stats.globalPoints")}</span>{" "}
        {state.globalPoints === undefined
          ? "80,000,000+"
          : formatNumber(state.globalPoints)}
      </Line>
      <Line className="stats__line stats__line--points">
        <div>{t("stats.points")}</div>
        <Points>{formatNumber(state.points)}</Points>
      </Line>
    </Wrapper>
  );
};

// Helpers

function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Styles

const Wrapper = styled.aside`
  color: #888;
  font-size: 0.875em;
  padding: 0.8em 1.5em;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;

  @media (max-width: 500px), (max-height: 500px) {
    display: none;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #bbb;
  padding: 0.2rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

const Points = styled.div`
  font-weight: 100;
  font-size: 4em;
  margin-top: -0.125em;
`;

const TwitterButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
  pointer-events: auto;
  text-decoration: none;

  &:hover {
    color: #444;
    text-decoration: underline;
  }
`;

export default Stats;
