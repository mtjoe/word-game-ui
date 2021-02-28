import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Home: FunctionComponent = () => {
  return (
    <div>
      <Link to="/game">Start Game</Link>
    </div>
  );
};

export default Home;
