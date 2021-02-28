import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

it("renders Start Game link", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/start game/i);
  expect(linkElement).toBeInTheDocument();
});
