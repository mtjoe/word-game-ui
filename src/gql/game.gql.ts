import { gql } from "@apollo/client";

export const START_GAME = gql`
  query StartGame {
    startGame {
      id
      letters
      size {
        x
        y
      }
      combinations {
        isAcross
        word
        location {
          x
          y
        }
      }
    }
  }
`;
