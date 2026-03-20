import React, { useContext, useEffect, useMemo, useState } from "react";
import FindTheInvisibleCow, {
  State,
  defaultState,
} from "../lib/FindTheInvisibleCow";
import nullthrows from "../lib/nullthrows";

type Context = {
  state: State;
  game: FindTheInvisibleCow;
};

const FticContext = React.createContext<Context | null>(null);

interface FticProviderProps {
  children?: React.ReactNode;
}

export const FticProvider: React.FC<FticProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>(defaultState);
  const game = useMemo(
    () => new FindTheInvisibleCow((state) => setState(state), loadState()),
    [],
  );

  // Add to window
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      window.ftic = game;
    }
  }, [game]);

  // Save to localStorage
  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <FticContext.Provider
      value={useMemo(() => ({ game, state }), [game, state])}
    >
      {children}
    </FticContext.Provider>
  );
};

export const useFtic = (): Context => nullthrows(useContext(FticContext));
export const useFticState = (): State => useFtic().state;
export const useFticGame = (): FindTheInvisibleCow => useFtic().game;

const loadState = (): State => {
  try {
    const json = localStorage.getItem("ftic_data");
    if (json) {
      const { points } = JSON.parse(json);
      return { ...defaultState, points };
    }
  } catch (e) {}

  return defaultState;
};

const saveState = ({ animalKey, points }: State): void => {
  localStorage.setItem(
    "ftic_data",
    JSON.stringify({ animal: animalKey, points }),
  );
};

declare global {
  interface Window {
    ftic: FindTheInvisibleCow;
  }
}
