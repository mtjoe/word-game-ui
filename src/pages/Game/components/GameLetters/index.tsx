import React from "react";
import styled from "styled-components";
import { FunctionComponent } from "react";

const Instructions = styled.p`
  margin-top: 30px;
`;

const LetterSet = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
`;

const LetterBox = styled.div`
  border: 1px solid #d1d1d1;
  border-radius: 2px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 1px;
`;

type Props = {
  letters: string[];
};

const GameLetters: FunctionComponent<Props> = ({ letters }: Props) => {
  return (
    <div>
      <Instructions>
        Guess words from these combinations of letters:
      </Instructions>
      <LetterSet>
        {letters.map((letter, index) => (
          <LetterBox key={`${letter}-${index}`}>
            {letter.toUpperCase()}
          </LetterBox>
        ))}
      </LetterSet>
    </div>
  );
};

export default GameLetters;
