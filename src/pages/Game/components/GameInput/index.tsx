import React, { useState } from "react";
import { FunctionComponent } from "react";
import { Button, Form, Col } from "react-bootstrap";

type Props = {
  guessWord: (word: string) => boolean;
};

const GameInput: FunctionComponent<Props> = ({ guessWord }: Props) => {
  const [word, setWord] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (guessWord(word)) {
      setWord("");
    }
    event.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            name="word"
            aria-label="word"
            value={word}
            autoComplete="off"
            onChange={(event) => setWord(event.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Guess
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default GameInput;
