import { render } from "@testing-library/react";
import { GlassCard } from ".";
import { Pokemon } from "../../../../pages/api/pokemon";
// import { PokemonLists } from "../../../Lists/components/PokemonLists";
// import { PokemonModal } from "../../../Modals/components/PokemonModal";

// const mockSetState = jest.fn();

// jest.mock("react", () => ({
//   useState: (initial: Pokemon) => [initial, mockSetState],
// }));

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

  // it("GlassCard renders PokemonModal with correct info", () => {
  //   let pokemon: Pokemon | null = {
  //     id: "1",
  //     name: "pikachu",
  //     sprites: {
  //       front_default:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  //       back_default:
  //         "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
  //     },
  //   }

  //   render(
  //     <>
  //       {renderModal && pokemon ? (
  //         <PokemonModal
  //           closeModal={() => (renderModal = false)}
  //           pokemon={pokemon}
  //         />
  //       ) : (
  //         <></>
  //       )}
  //       <PokemonLists
  //         setModalPokemon={setModalPokemon}
  //         openModal={() => setIsModalOpen(true)}
  //         pokemons={pokemons}
  //       />
  //     </>
  //   );
  // });
});
