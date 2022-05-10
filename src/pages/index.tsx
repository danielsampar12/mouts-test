import type { GetServerSideProps } from "next";
import { PokemonLists } from "../components/Lists/PokemonLists";
import { api } from "../lib/axios";
import { Pokemon } from "./api/pokemon";

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`);

  console.log(data);

  return {
    props: {
      pokemons: data,
    },
  };
};

export default function Home({ pokemons }: { pokemons: Pokemon[] }) {
  return <PokemonLists pokemons={pokemons} />;
}
