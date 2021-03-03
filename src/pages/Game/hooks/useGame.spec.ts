import { renderHook } from "@testing-library/react-hooks";
import { StartGame_startGame } from "../../../gql/types/StartGame";
import useGame from "./useGame";

describe("useGame", () => {
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

  it("should return empty object if game is not defined", () => {
    const { result } = renderHook(() => useGame(undefined));

    expect(result.current).toStrictEqual({});
  });

  it("should return initial entries", () => {
    const { result } = renderHook(() => useGame(game));

    expect(result.current.entries).toStrictEqual([
      { filled: false, size: 3 },
      { filled: false, size: 6 },
    ]);
  });

  it("should return letters", () => {
    const { result } = renderHook(() => useGame(game));

    expect(result.current.letters).toStrictEqual(["a", "b", "c", "d", "e"]);
  });
});
