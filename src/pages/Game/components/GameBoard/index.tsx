import React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { WordEntries } from "../../types";

const BoardContainer = styled.div`
  margin-top: 20px;
`;

type Props = {
  entries: WordEntries;
};

const GameBoard: FunctionComponent<Props> = ({ entries }: Props) => {
  return (
    <BoardContainer>
      {Object.values(entries).map((entry) => {
        switch (entry.filled) {
          case true:
            return <p key={entry.word}>{entry.word}</p>;
          case false:
            return <p key={entry.word}>{"_ ".repeat(entry.word.length)}</p>;
        }
      })}
    </BoardContainer>
  );
};

export default GameBoard;
