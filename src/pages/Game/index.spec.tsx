import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Game from ".";
import { START_GAME } from "../../gql/game.gql";
import { MemoryRouter } from "react-router-dom";

describe("Game", () => {
  it("should render leave game button", () => {
    const mockGame = {
      request: { query: START_GAME },
    };

    const { queryByText } = render(
      <MemoryRouter>
        <MockedProvider mocks={[mockGame]} addTypename={false}>
          <Game />
        </MockedProvider>
      </MemoryRouter>
    );

    expect(queryByText("Leave Game")).toBeInTheDocument();
  });
});
