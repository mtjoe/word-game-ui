import React from "react";
import { render, screen } from "@testing-library/react";
import GameBoard from ".";
import { WordEntry } from "../../types";

describe("GameBoard", () => {
  it("should render word, if word has been filled", () => {
    const entries: WordEntry[] = [{ filled: true, word: "some-word" }];

    render(<GameBoard entries={entries} />);

    expect(screen.queryByText("some-word")).toBeInTheDocument();
  });

  it("should render `_` with the size of word, if word has not been filled", () => {
    const entries: WordEntry[] = [{ filled: false, word: "paper" }];

    render(<GameBoard entries={entries} />);

    expect(screen.queryByText("_ _ _ _ _")).toBeInTheDocument();
  });
});
