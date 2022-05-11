import { useState } from "react";
import { Pokemon } from "../../../../pages/api/pokemon";
import { PokemonLists } from "../../../Lists/components/PokemonLists";
import { PokemonModal } from "../../../Modals/components/PokemonModal";

interface HomeProps {
  pokemons: Pokemon[];
}

export function HomePage({ pokemons }: HomeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPokemon, setModalPokemon] = useState<Pokemon | null>(null);

  return (
    <>
      {isModalOpen && modalPokemon ? (
        <PokemonModal
          closeModal={() => setIsModalOpen(false)}
          pokemon={modalPokemon}
        />
      ) : (
        <></>
      )}
      <PokemonLists
        setModalPokemon={setModalPokemon}
        openModal={() => setIsModalOpen(true)}
        pokemons={pokemons}
      />
    </>
  );
}
