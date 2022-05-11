import type { GetServerSideProps } from "next";
import { PokemonPage } from "../components/Pages/components/PokemonPage";
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
  return <PokemonPage pokemons={pokemons} />;
}
