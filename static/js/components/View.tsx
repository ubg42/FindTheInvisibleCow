import React from "react";
import Welcome from "./modal/Welcome";
import Unsupported from "./modal/Unsupported";
import Congratulations from "./modal/Congratulations";
import Game from "./Game";
import { useFticState } from "../context/ftic";
import { Page } from "../lib/FindTheInvisibleCow";

const View: React.FC = () => {
  const state = useFticState();

  switch (state.game.page) {
    case Page.Welcome: {
      return <Welcome />;
    }
    case Page.Game: {
      return <Game />;
    }
    case Page.Congratulations: {
      return <Congratulations />;
    }
    case Page.Unsupported: {
      return <Unsupported />;
    }
  }
};

export default View;
