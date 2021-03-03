import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { START_GAME } from "../../gql/game.gql";
import { StartGame, StartGame_startGame } from "../../gql/types/StartGame";
import GameBoard from "./components/GameBoard";
import { WordEntry } from "./types";

type HookContent = [entries?: WordEntry[]];

const useGame = (game: StartGame_startGame | undefined): HookContent => {
  if (!game) {
    return [];
  }

  const entries: WordEntry[] = [
    { filled: true, word: "word" },
    { filled: true, word: "" },
    { filled: false, size: 5 },
  ];

  return [entries];
};

const Game: FunctionComponent = () => {
  const { loading, error, data } = useQuery<StartGame>(START_GAME);
  const [entries] = useGame(data?.startGame);

  return (
    <div>
      <Link to="/">Leave Game</Link>

      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {entries && <GameBoard entries={entries} />}
    </div>
  );
};

export default Game;
