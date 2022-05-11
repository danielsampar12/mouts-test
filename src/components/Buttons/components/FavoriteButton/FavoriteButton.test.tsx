import { render, fireEvent } from "@testing-library/react";
import { FavoriteButton } from ".";
import * as hooks from "../../../../hooks/favoritePokemons";
import { Pokemon } from "../../../../pages/api/pokemon";

const pokemonMock: Pokemon = {
  id: "1",
  name: "pikachu",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
  },
  stats: [
    {
      base_stat: 39,
      stat: {
        name: "hp",
      },
    },
    {
      base_stat: 52,
      stat: {
        name: "attack",
      },
    },
    {
      base_stat: 43,
      stat: {
        name: "defense",
      },
    },
    {
      base_stat: 60,
      stat: {
        name: "special-attack",
      },
    },
    {
      base_stat: 50,
      stat: {
        name: "special-defense",
      },
    },
    {
      base_stat: 65,
      stat: {
        name: "speed",
      },
    },
  ],
  types: [
    {
      type: {
        name: "fire",
      },
    },
  ],
};

describe("FavoriteButton test", () => {
  it("Should render correctly depending if it is not favorited", () => {
    jest.spyOn(hooks, "useFavoritePokemons").mockImplementation(() => ({
      favoritePokemons: [],
      addPokemonToFavorites: () => {},
      removeFromFavorites: () => {},
    }));

    const { getByText } = render(<FavoriteButton pokemon={pokemonMock} />);

    expect(getByText("Favoritar pokemon")).toBeInTheDocument();
    expect(() => getByText("Tirar dos favoritos")).toThrow(
      "Unable to find an element"
    );
  });

  it("Should render correctly depending if it is favorited", () => {
    jest.spyOn(hooks, "useFavoritePokemons").mockImplementation(() => ({
      favoritePokemons: [pokemonMock],
      addPokemonToFavorites: () => {},
      removeFromFavorites: () => {},
    }));

    const { getByText } = render(<FavoriteButton pokemon={pokemonMock} />);

    expect(getByText("Tirar dos favoritos")).toBeInTheDocument();
    expect(() => getByText("Favoritar pokemon")).toThrow(
      "Unable to find an element"
    );
  });
});
