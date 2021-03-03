import { useState } from "react";
import { WordEntries } from "../types";
import {
  StartGame_startGame,
  StartGame_startGame_combinations,
} from "../../../gql/types/StartGame";

const getInitialEntries = (
  combinations: StartGame_startGame_combinations[]
): WordEntries =>
  combinations.reduce(
    (curr, combination, index) => ({
      ...curr,
      [index]: {
        filled: false,
        word: combination.word,
      },
    }),
    {}
  );

type HookContent = {
  entries?: WordEntries;
  letters?: string[];
  guessWord?: (word: string) => boolean;
};

const useGame = (game: StartGame_startGame | undefined): HookContent => {
  const [entries, setEntries] = useState<WordEntries | undefined>(
    () => game && getInitialEntries(game.combinations)
  );

  if (!game) {
    return {};
  }

  const guessWord = (word: string): boolean => {
    const foundInIndex = game.combinations.findIndex(
      (combination) => combination.word === word
    );

    if (foundInIndex < 0) {
      return false;
    }

    setEntries((prevEntries) => ({
      ...prevEntries,
      [foundInIndex]: {
        filled: true,
        word,
      },
    }));

    return true;
  };

  return { entries, letters: game.letters, guessWord };
};

export default useGame;
