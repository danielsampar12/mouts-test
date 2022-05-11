import type { GetServerSideProps } from "next";
import { HomePage } from "../components/Pages/components/HomePage";
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
  return <HomePage pokemons={pokemons} />;
}
