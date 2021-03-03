import { useState } from "react";
import { WordEntry } from "../types";
import {
  StartGame_startGame,
  StartGame_startGame_combinations,
} from "../../../gql/types/StartGame";

const getInitialEntries = (
  combinations: StartGame_startGame_combinations[]
): WordEntry[] =>
  combinations.map((combination) => ({
    filled: false,
    size: combination.word.length,
  }));

type HookContent = {
  entries?: WordEntry[];
  letters?: string[];
};

const useGame = (game: StartGame_startGame | undefined): HookContent => {
  const [entries] = useState(
    () => game && getInitialEntries(game.combinations)
  );

  if (!game) {
    return {};
  }

  return { entries, letters: game.letters };
};

export default useGame;
