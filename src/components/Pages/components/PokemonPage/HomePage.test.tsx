import { render } from "@testing-library/react";
import Home from "../../../../pages";
import { pokemonArrayMock } from "../../../../tests/pokemonArrayMock";

describe("HomePage", () => {
  it("should renders correctly first page", () => {
    const { getByText } = render(<Home page={0} pokemons={pokemonArrayMock} />);

    expect(getByText("bulbasaur")).toBeInTheDocument();
    expect(() => getByText("spearow")).toThrow("Unable to find an element");
  });
});
