import { useState } from "react";
import { Pokemon } from "../../../../pages/api/pokemon";
import { PokemonLists } from "../../../Lists/components/PokemonLists";
import { PokemonModal } from "../../../Modals/components/PokemonModal";
import { NavBar } from "../../../Navigations/components/NavBar";

interface HomeProps {
  pokemons: Pokemon[];
  isFavoritePage?: boolean;
}

export function PokemonPage({ pokemons, isFavoritePage = false }: HomeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPokemon, setModalPokemon] = useState<Pokemon | null>(null);

  return (
    <>
      <NavBar />
      {isModalOpen && modalPokemon ? (
        <PokemonModal
          closeModal={() => setIsModalOpen(false)}
          pokemon={modalPokemon}
          isFavoritePage={isFavoritePage}
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
