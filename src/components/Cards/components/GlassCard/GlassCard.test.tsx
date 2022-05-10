import { render } from "@testing-library/react";
import { GlassCard } from ".";
import { Pokemon } from "../../../../pages/api/pokemon";

test("GlassCard renders correctly", () => {
  const pokemon: Pokemon = {
    id: "1",
    name: "pikachu",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    },
  };

  const { getByText } = render(<GlassCard pokemon={pokemon} />);

  expect(getByText("pikachu")).toBeInTheDocument();
});
