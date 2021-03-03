import React from "react";
import { FunctionComponent } from "react";
import { WordEntry } from "../../types";

type Props = {
  entries: WordEntry[];
};

const GameBoard: FunctionComponent<Props> = ({ entries }: Props) => {
  return (
    <div>
      {entries.map((entry, index) => {
        switch (entry.filled) {
          case true:
            return <p key={index}>{entry.word}</p>;
          case false:
            return "_ ".repeat(entry.size);
        }
      })}
    </div>
  );
};

export default GameBoard;
