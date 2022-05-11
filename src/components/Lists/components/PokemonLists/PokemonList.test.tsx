import { render } from "@testing-library/react";
import { PokemonLists } from ".";
import { Pokemon } from "../../../../pages/api/pokemon";
import { pokemonArrayMock } from "../../../../tests/pokemonArrayMock";

describe("GlassCard", () => {
  it("GlassCard renders correctly", () => {
    const { getByText, getByAltText } = render(
      <PokemonLists
        openModal={() => {}}
        pokemons={pokemonArrayMock}
        setModalPokemon={() => {}}
      />
    );

    expect(getByText("pikachu")).toBeInTheDocument();
    expect(getByAltText(`pikachu image`)).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    );

    expect(getByText("bulbasaur")).toBeInTheDocument();
    expect(getByAltText(`bulbasaur image`)).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    );

    expect(getByText("charmander")).toBeInTheDocument();
    expect(getByAltText(`charmander image`)).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    );
  });
});
