import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { START_GAME } from "../../gql/game.gql";
import { StartGame } from "../../gql/types/StartGame";
import GameBoard from "./components/GameBoard";
import useGame from "./hooks/useGame";

const Game: FunctionComponent = () => {
  const { loading, error, data } = useQuery<StartGame>(START_GAME);
  const { entries } = useGame(data?.startGame);

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
