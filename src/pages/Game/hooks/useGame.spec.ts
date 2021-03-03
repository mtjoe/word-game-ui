import { renderHook } from "@testing-library/react-hooks";
import { StartGame_startGame } from "../../../gql/types/StartGame";
import useGame from "./useGame";

describe("useGame", () => {
  it("should set initial entry", () => {
    const game: StartGame_startGame = {
      __typename: "Game",
      id: "1",
      letters: ["a", "b", "c", "d", "e"],
      size: { __typename: "Grid", x: 5, y: 3 },
      combinations: [
        {
          __typename: "Combination",
          location: { __typename: "Grid", x: 0, y: 0 },
          word: "bed",
          isAcross: true,
        },
        {
          __typename: "Combination",
          location: { __typename: "Grid", x: 0, y: 0 },
          word: "batter",
          isAcross: false,
        },
      ],
    };

    const { result } = renderHook(() => useGame(game));

    expect(result.current.entries).toStrictEqual([
      { filled: false, size: 3 },
      { filled: false, size: 6 },
    ]);
  });
});
