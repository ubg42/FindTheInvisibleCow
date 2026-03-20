import React from "react";
import styled from "styled-components";
import Animal from "./Animal";
import { useFticState } from "../context/ftic";
import { Page, GameState } from "../lib/FindTheInvisibleCow";

const Game: React.FC = () => {
  const state = useFticState();
  const game = state.game.page === Page.Game ? state.game : null;

  if (game === null) {
    return null;
  }

  switch (game.state) {
    case GameState.Searching:
    case GameState.Hover:
      return <PlayArea hover={game.state === GameState.Hover}></PlayArea>;
    default:
      return (
        <Animal
          animalKey={state.animalKey}
          relativePos={game.relativeAnimalPos}
          state={game.state}
        />
      );
  }
};

interface PlayAreaProps {
  hover: boolean;
}

const PlayArea = styled.div<PlayAreaProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  cursor: ${({ hover }) => (hover ? "pointer" : null)};
`;

export default Game;
