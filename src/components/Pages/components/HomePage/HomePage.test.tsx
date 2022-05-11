import { render } from "@testing-library/react";
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
      },
    ];
  });
});
