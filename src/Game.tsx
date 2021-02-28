import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { START_GAME } from "./gql/game.gql";
import { StartGame } from "./gql/types/StartGame";

const Game: FunctionComponent = () => {
  const { loading } = useQuery<StartGame>(START_GAME);

  return (
    <div>
      <Link to="/">Leave Game</Link>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Game;
