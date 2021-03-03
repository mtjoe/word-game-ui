import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { START_GAME } from "../../gql/game.gql";
import { StartGame } from "../../gql/types/StartGame";
import GameBoard from "./components/GameBoard";
import GameLetters from "./components/GameLetters";
import GameInput from "./components/GameInput";
import useGame from "./hooks/useGame";

const Game: FunctionComponent = () => {
  const { loading, error, data } = useQuery<StartGame>(START_GAME);
  const { entries, letters, guessWord } = useGame(data?.startGame);

  return (
    <div>
      <Link to="/">Leave Game</Link>

      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {letters && <GameLetters letters={letters} />}
      {guessWord && <GameInput guessWord={guessWord} />}
      {entries && <GameBoard entries={entries} />}
    </div>
  );
};

export default Game;
