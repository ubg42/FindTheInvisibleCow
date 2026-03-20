import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import ModalAd from "../ModalAd";
import Button from "../Button";
import SocialButton from "../SocialButton";
import { useT } from "../../context/i18n";
import { useFtic } from "../../context/ftic";
import { AnimalsArray } from "../../animals";

const Congratulations: React.FC = () => {
  const t = useT();
  const {
    game,
    state: { animalKey, expertMode, points },
  } = useFtic();

  return (
    <Modal wide>
      <Left>
        <h1>{t("success.congratulations")}</h1>

        <p>
          {t("success.found", { points })}
          {points === 1 && (
            <>
              {" "}
              <span>{t("success.keepItUp")}</span>
            </>
          )}
        </p>

        <Field checkbox>
          <label>
            <input
              type="checkbox"
              checked={expertMode}
              onChange={(e) => game.setExpertMode(e.target.checked)}
            />
            {t("config.expertMode")}
            <br />
            <small>{t("config.expertModeDescription")}</small>
          </label>
        </Field>

        <Field>
          <label>
            {t("config.findA")}
            <select
              onChange={(e) => game.setAnimal(e.target.value as any)}
              value={animalKey}
            >
              {AnimalsArray.filter(
                ({ pointsRequired }) => (pointsRequired ?? 0) <= points,
              ).map((animal) => (
                <option key={animal.key} value={animal.key}>
                  {t(`animal.${animal.key}`)}
                </option>
              ))}
            </select>
          </label>
        </Field>

        {points < (AnimalsArray[1].pointsRequired ?? 0) ? (
          <Tip
            dangerouslySetInnerHTML={{ __html: t("success.unlockAtFive") }}
          ></Tip>
        ) : points < (AnimalsArray[2].pointsRequired ?? 0) ? (
          <Tip
            dangerouslySetInnerHTML={{ __html: t("success.unlockAtFifty") }}
          ></Tip>
        ) : (
          <Tip
            dangerouslySetInnerHTML={{ __html: t("success.unlockedAll") }}
          ></Tip>
        )}

        <ButtonRow>
          <Button onClick={() => game.play()}>
            {t("cta.findA", { animal: t(`animal.${animalKey}`) })}
          </Button>
          <SocialButton network="facebook" />
          <SocialButton network="twitter" />
        </ButtonRow>
      </Left>
      <Right>
        <ModalAd />
      </Right>
    </Modal>
  );
};

const Left = styled.div`
  @media screen and (min-width: 800px) {
    float: left;
    width: calc(100% - 300px - 1rem);
  }
`;

const Right = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    float: right;
    margin-left: 1rem;
    width: 300px;
  }
`;

interface FieldProps {
  checkbox?: boolean;
}

const Field = styled.div<FieldProps>`
  display: block;
  margin-bottom: ${({ checkbox }) => (checkbox ? "10px" : null)};

  &::after {
    clear: both;
    content: "";
    display: table;
  }

  input[type="checkbox"],
  label {
    cursor: pointer;
  }

  input[type="checkbox"] {
    float: left;
    margin: 3px 10px 15px 0;
  }

  select {
    cursor: pointer;
    font: inherit;
    margin-left: 0.25em;
  }
`;

const Tip = styled.small`
  display: block;
  margin-top: 1em;
`;

const ButtonRow = styled.div`
  margin-top: 1em;
`;

export default Congratulations;
