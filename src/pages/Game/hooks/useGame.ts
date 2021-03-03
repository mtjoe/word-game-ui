import { useEffect, useState } from "react";
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

const checkIfWin = (entries: WordEntries) => {
  return Object.values(entries).filter((entry) => !entry.filled).length === 0;
};

type HookContent = {
  entries?: WordEntries;
  letters?: string[];
  guessWord?: (word: string) => boolean;
  hasWon: boolean;
};

const useGame = (game: StartGame_startGame | undefined): HookContent => {
  const [hasWon, setHasWon] = useState<boolean>(false);
  const [entries, setEntries] = useState<WordEntries | undefined>(
    () => game && getInitialEntries(game.combinations)
  );

  useEffect(() => {
    if (entries && checkIfWin(entries)) {
      setHasWon(true);
    }
  }, [entries]);

  if (!game || !entries) {
    return {
      hasWon: false,
    };
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

  return { entries, letters: game.letters, guessWord, hasWon };
};

export default useGame;
