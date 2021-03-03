import React from "react";
import { FunctionComponent } from "react";
import { WordEntries } from "../../types";

type Props = {
  entries: WordEntries;
};

const GameBoard: FunctionComponent<Props> = ({ entries }: Props) => {
  return (
    <div>
      {Object.values(entries).map((entry) => {
        switch (entry.filled) {
          case true:
            return <p key={entry.word}>{entry.word}</p>;
          case false:
            return <p key={entry.word}>{"_ ".repeat(entry.word.length)}</p>;
        }
      })}
    </div>
  );
};

export default GameBoard;
