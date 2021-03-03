import React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home: FunctionComponent = () => {
  return (
    <Container>
      <Link to="/game">Start Game</Link>
    </Container>
  );
};

export default Home;
