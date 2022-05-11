import { useState } from "react";
import { Pokemon } from "../../../../pages/api/pokemon";
import { PokemonLists } from "../../../Lists/components/PokemonLists";
import { PokemonModal } from "../../../Modals/components/PokemonModal";
import { NavBar } from "../../../Navigations/components/NavBar";

interface HomeProps {
  pokemons: Pokemon[];
}

export function PokemonPage({ pokemons }: HomeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPokemon, setModalPokemon] = useState<Pokemon | null>(null);

  return (
    <>
      <NavBar />
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