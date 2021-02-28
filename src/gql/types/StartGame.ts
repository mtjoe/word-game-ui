/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StartGame
// ====================================================

export interface StartGame_startGame_size {
  __typename: "Grid";
  x: number;
  y: number;
}

export interface StartGame_startGame_combinations_location {
  __typename: "Grid";
  x: number;
  y: number;
}

export interface StartGame_startGame_combinations {
  __typename: "Combination";
  isAcross: boolean;
  word: string;
  location: StartGame_startGame_combinations_location;
}

export interface StartGame_startGame {
  __typename: "Game";
  id: string;
  letters: string[];
  size: StartGame_startGame_size;
  combinations: StartGame_startGame_combinations[];
}

export interface StartGame {
  startGame: StartGame_startGame;
}
