import React from "react";
import { render } from "@testing-library/react";
import GameLetters from ".";

describe("GameLetters", () => {
  it("should render all the letters in uppercase", () => {
    const letters = ["a", "b", "c", "d", "e"];

    const { queryByText } = render(<GameLetters letters={letters} />);

    expect(queryByText("A")).toBeInTheDocument();
    expect(queryByText("B")).toBeInTheDocument();
    expect(queryByText("C")).toBeInTheDocument();
    expect(queryByText("D")).toBeInTheDocument();
    expect(queryByText("E")).toBeInTheDocument();
  });
});
