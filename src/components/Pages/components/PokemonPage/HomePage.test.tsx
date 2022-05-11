import { render } from "@testing-library/react";
import Home from "../../../../pages";
import { pokemonArrayMock } from "../../../../tests/pokemonArrayMock";

describe("HomePage", () => {
  it("HomePage renders correctly", () => {
    const { getByText } = render(<Home pokemons={pokemonArrayMock} />);

    expect(getByText("bulbasaur")).toBeInTheDocument();
  });
});
