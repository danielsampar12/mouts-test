import { render } from "@testing-library/react";
import { PokemonLists } from ".";
import { Pokemon } from "../../../../pages/api/pokemon";

describe("GlassCard", () => {
  it("GlassCard renders correctly", () => {
    const pokemons: Pokemon[] = [
      {
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
      },
      {
        id: "2",
        name: "charmander",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
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
      },

      {
        id: "3",
        name: "bulbasaur",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
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
      },
    ];

    const { getByText, getByAltText } = render(
      <PokemonLists
        openModal={() => {}}
        pokemons={pokemons}
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
