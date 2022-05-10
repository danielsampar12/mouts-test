import type { GetServerSideProps } from "next";
import { useState } from "react";
import { PokemonLists } from "../components/Lists/components/PokemonLists";
import { PokemonModal } from "../components/Modals/components/PokemonModal";
import { api } from "../lib/axios";
import { Pokemon } from "./api/pokemon";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get("/pokemon");

  return {
    props: {
      pokemons: data,
    },
  };
};

export default function Home({ pokemons }: { pokemons: Pokemon[] }) {
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
