import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Game from ".";
import { START_GAME } from "../../gql/game.gql";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("Game", () => {
  it("should render leave game button", () => {
    const mockGame = {
      request: { query: START_GAME },
    };

    render(
      <MemoryRouter>
        <MockedProvider mocks={[mockGame]} addTypename={false}>
          <Game />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(screen.queryByText("Leave Game")).toBeInTheDocument();
  });

  it("should show loading text when game response is still loading", () => {
    const mockGame = {
      request: { query: START_GAME },
    };

    render(
      <MemoryRouter>
        <MockedProvider mocks={[mockGame]} addTypename={false}>
          <Game />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(screen.queryByText("Loading...")).toBeInTheDocument();
  });

  it("should show error message when an error is returned", async () => {
    const mockGame = {
      request: { query: START_GAME },
      error: { name: "Some error", message: "Some error message" },
    };

    render(
      <MemoryRouter>
        <MockedProvider mocks={[mockGame]} addTypename={false}>
          <Game />
        </MockedProvider>
      </MemoryRouter>
    );

    await act(async () => {
      await wait(0);

      expect(screen.queryByText("Some error message")).toBeInTheDocument();
    });
  });
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
