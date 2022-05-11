import { render, fireEvent } from "@testing-library/react";
import { FavoriteButton } from ".";
import * as hooks from "../../../../hooks/favoritePokemons";
import { Pokemon } from "../../../../pages/api/pokemon";
import { pokemonMock } from "../../../../tests/pokemonMock";

describe("FavoriteButton test", () => {
  it("Should render correctly depending if it is not favorited", () => {
    const addPokemonToFavorites = jest.fn();

    jest.spyOn(hooks, "useFavoritePokemons").mockImplementation(() => ({
      favoritePokemons: [],
      addPokemonToFavorites,
      removeFromFavorites: () => {},
    }));

    const { getByText } = render(<FavoriteButton pokemon={pokemonMock} />);

    expect(getByText("Favoritar pokemon")).toBeInTheDocument();
    expect(() => getByText("Remover dos favoritos")).toThrow(
      "Unable to find an element"
    );

    fireEvent.click(getByText("Favoritar pokemon"));
    expect(addPokemonToFavorites).toHaveBeenCalledWith(pokemonMock);
  });

  it("Should render correctly depending if it is favorited", () => {
    const removeFromFavorites = jest.fn();

    jest.spyOn(hooks, "useFavoritePokemons").mockImplementation(() => ({
      favoritePokemons: [pokemonMock],
      addPokemonToFavorites: () => {},
      removeFromFavorites,
    }));

    const { getByText } = render(<FavoriteButton pokemon={pokemonMock} />);

    expect(getByText("Remover dos favoritos")).toBeInTheDocument();
    expect(() => getByText("Favoritar pokemon")).toThrow(
      "Unable to find an element"
    );

    fireEvent.click(getByText("Remover dos favoritos"));
    expect(removeFromFavorites).toHaveBeenCalledWith(pokemonMock.id);
  });
});
