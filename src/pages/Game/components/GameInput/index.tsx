import React, { useState } from "react";
import { FunctionComponent } from "react";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="word"
        aria-label="word"
        value={word}
        onChange={(event) => setWord(event.target.value)}
      />
      <input type="submit" value="Guess" />
    </form>
  );
};

export default GameInput;
