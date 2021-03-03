import React from "react";
import styled from "styled-components";
import { FunctionComponent } from "react";

const LetterSet = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

const LetterBox = styled.div`
  border: 1px solid #d1d1d1;
  width: 50px;
  height: 50px;
  line-height: 50px;
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
        <LetterBox key={`${letter}-${index}`}>{letter}</LetterBox>
      ))}
    </LetterSet>
  );
};

export default GameLetters;
