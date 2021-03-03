import React from "react";
import styled from "styled-components";
import { FunctionComponent } from "react";

const LetterSet = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;

const LetterBox = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 1px;
`;

type Props = {
  letters: string[];
};

const GameLetters: FunctionComponent<Props> = ({ letters }: Props) => {
  return (
    <LetterSet>
      {letters.map((letter, index) => (
        <LetterBox key={`${letter}-${index}`}>
          <p>{letter}</p>
        </LetterBox>
      ))}
    </LetterSet>
  );
};

export default GameLetters;
