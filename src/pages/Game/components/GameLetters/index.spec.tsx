import React from "react";
import { render } from "@testing-library/react";
import GameLetters from ".";

describe("GameLetters", () => {
  it("should render all the letters", () => {
    const letters = ["a", "b", "c", "d", "e"];

    const { queryByText } = render(<GameLetters letters={letters} />);

    expect(queryByText("a")).toBeInTheDocument();
    expect(queryByText("b")).toBeInTheDocument();
    expect(queryByText("c")).toBeInTheDocument();
    expect(queryByText("d")).toBeInTheDocument();
    expect(queryByText("e")).toBeInTheDocument();
  });
});
