import React from "react";
import styled from "styled-components";
import BrowserSupport from "../BrowserSupport";
import Button from "../Button";
import ProgressBar from "../ProgressBar";
import Modal from "./Modal";
import { useT } from "../../context/i18n";
import { useFtic } from "../../context/ftic";
import { ReactComponent as SpeakerSVG } from "../../images/icons/speaker.svg";

const Welcome: React.FC = () => {
  const t = useT();
  const { game, state } = useFtic();

  return (
    <Modal>
      <h1>{t("findTheInvisibleCow")}</h1>

      <p>{t("instruction.intro")}</p>

      <AudioWarning>
        <Speaker />
        <AudioWarningText>{t("instruction.audio")}</AudioWarningText>
      </AudioWarning>

      <CTA>
        {state.audio.loaded ? (
          <Button onClick={() => game.play()}>{t("cta.start")}</Button>
        ) : (
          <ProgressBar progress={state.audio.progress} />
        )}
      </CTA>

      <BrowserSupport supported />
    </Modal>
  );
};

const AudioWarning = styled.div`
  align-items: center;
  display: flex;
  font-style: italic;
  padding-left: 0;
`;

const Speaker = styled(SpeakerSVG)`
  color: #bbb;
  display: inline-block;
  margin-right: 1em;
  width: 3em;
  height: 3em;
`;

const AudioWarningText = styled.p`
  margin: 0;
`;

const CTA = styled.div`
  margin-top: 1rem;
`;

export default Welcome;
