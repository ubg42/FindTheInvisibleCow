import React, { useMemo } from "react";
import styled from "styled-components";
import { AnimalKey, AnimalsMap } from "../animals";
import { Position, GameState } from "../lib/FindTheInvisibleCow";
import { ReactComponent as CowSVG } from "../images/animals/cow.svg";
import { ReactComponent as CowSoundSVG } from "../images/animals/cow-sound.svg";
import { ReactComponent as FoxSVG } from "../images/animals/fox.svg";
import { ReactComponent as FoxSoundSVG } from "../images/animals/fox-sound.svg";
import { ReactComponent as GoatSVG } from "../images/animals/goat.svg";
import { ReactComponent as GoatSoundSVG } from "../images/animals/goat-sound.svg";
import { ReactComponent as ChristmasHatSVG } from "../images/hats/christmas.svg";
import { ReactComponent as HalloweenHatSVG } from "../images/hats/halloween.svg";
import { ReactComponent as NewYearHatSVG } from "../images/hats/new-year.svg";
import { Hats, Hat } from "../hats";

const WIDTH = 320;
const ASPECT_RATIO = 1384 / 1024;

interface Props {
  animalKey: AnimalKey;
  relativePos: Position;
  state: GameState;
}

const Animal: React.FC<Props> = ({ animalKey, relativePos, state }) => {
  const animal = AnimalsMap.get(animalKey);
  const hat = useMemo(() => Hats.find((h) => h.test()), []);

  const AnimalSVG = getAnimalSVG(animalKey, state === GameState.Moo);
  const HatSVG = hat ? getHatSVG(hat.key) : null;

  return (
    <Container relativePos={relativePos} state={state}>
      <AnimalSVG />
      {animal != null && hat != null && HatSVG != null && (
        <HatSVG
          style={{
            left: animal.hatPosition[0] * 100 + "%",
            position: "absolute",
            top: animal.hatPosition[1] * 100 + "%",
            transform: "translate(-50%, -50%)",
            width: hat.width * 100 + "%",
          }}
        />
      )}
    </Container>
  );
};

interface ContainerProps {
  relativePos: Position;
  state: GameState;
}

const Container = styled.div<ContainerProps>`
  height: ${WIDTH / ASPECT_RATIO}px;
  left: 0;
  margin-left: ${-0.5 * WIDTH}px;
  margin-top: ${(-0.5 * WIDTH) / ASPECT_RATIO}px;
  position: absolute;
  top: 0;
  transform: ${({ relativePos, state }: ContainerProps) => {
    if (state === GameState.Found) {
      const x = relativePos[0] * 100;
      const y = relativePos[1] * 100;
      return `translate(${x}vw, ${y}vh) scale(.25)`;
    }

    return "translate(50vw, 50vh)";
  }};
  transition: transform 0.5s;
  width: ${WIDTH}px;
`;

const getAnimalSVG = (
  animalKey: AnimalKey,
  sound: boolean,
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
  switch (animalKey) {
    case AnimalKey.Cow:
      return sound ? CowSoundSVG : CowSVG;
    case AnimalKey.Fox:
      return sound ? FoxSoundSVG : FoxSVG;
    case AnimalKey.Goat:
      return sound ? GoatSoundSVG : GoatSVG;
  }
};

const getHatSVG = (
  hatKey: Hat,
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
  switch (hatKey) {
    case Hat.Christmas:
      return ChristmasHatSVG;
    case Hat.Halloween:
      return HalloweenHatSVG;
    case Hat.NewYear:
      return NewYearHatSVG;
  }
};

export default Animal;
