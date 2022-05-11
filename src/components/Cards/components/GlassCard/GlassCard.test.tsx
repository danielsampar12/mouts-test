import { render } from "@testing-library/react";
import { GlassCard } from ".";
import { Pokemon } from "../../../../pages/api/pokemon";

describe("GlassCard", () => {
  it("GlassCard renders correctly", () => {
    const pokemon: Pokemon = {
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

    const { getByRole, getByAltText, getByText } = render(
      <GlassCard onClick={() => {}} pokemon={pokemon} />
    );

    expect(getByText("pikachu")).toBeInTheDocument();

    expect(getByRole("heading").textContent).toMatch("pikachu");

    expect(getByAltText(`${pokemon.name} image`)).toHaveAttribute(
      "src",
      pokemon.sprites.front_default
    );
  });
});
