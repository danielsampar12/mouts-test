import { render } from "@testing-library/react";
import { GlassCard } from ".";
import { pokemonMock } from "../../../../tests/pokemonMock";

describe("GlassCard", () => {
  it("GlassCard renders correctly", () => {
    const { getByRole, getByAltText, getByText } = render(
      <GlassCard onClick={() => {}} pokemon={pokemonMock} />
    );

    expect(getByText("pikachu")).toBeInTheDocument();

    expect(getByRole("heading").textContent).toMatch("pikachu");

    expect(getByAltText(`${pokemonMock.name} image`)).toHaveAttribute(
      "src",
      pokemonMock.sprites.front_default
    );
  });
});
