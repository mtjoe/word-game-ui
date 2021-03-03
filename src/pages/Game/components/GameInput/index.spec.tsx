import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GameInput from ".";

describe("GameInput", () => {
  it("upon a guess, should call guessWord fn with word input", () => {
    const guessWord = jest.fn();

    const { getByText, getByLabelText } = render(
      <GameInput guessWord={guessWord} />
    );

    const guessButton = getByText("Guess");
    const guessTextInput = getByLabelText("word");

    fireEvent.change(guessTextInput, { target: { value: "GUESS" } });
    fireEvent.click(guessButton);

    expect(guessWord).toHaveBeenCalledWith("GUESS");
  });
});
