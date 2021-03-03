import { useState } from "react";
import { WordEntry } from "../types";
import {
  StartGame_startGame,
  StartGame_startGame_combinations,
} from "../../../gql/types/StartGame";

export type HookContent = { entries?: WordEntry[] };

const getInitialEntries = (
  combinations: StartGame_startGame_combinations[]
): WordEntry[] =>
  combinations.map((combination) => ({
    filled: false,
    size: combination.word.length,
  }));

const useGame = (game: StartGame_startGame | undefined): HookContent => {
  const [entries] = useState(
    () => game && getInitialEntries(game.combinations)
  );

  if (!game) {
    return {};
  }

  return { entries };
};

export default useGame;
