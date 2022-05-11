import type { GetServerSideProps } from "next";
import { PokemonPage } from "../components/Pages/components/PokemonPage";
import { api } from "../lib/axios";
import { Pokemon } from "./api/pokemon";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryPage = query.page;

  const page = typeof queryPage === "string" ? +queryPage : 0;

  if (page < 0) {
    return {
      props: {},
      redirect: {
        destination: "/404",
      },
    };
  }

  const { data } = await api.get(`/pokemon/?page=${page}`);

  return {
    props: {
      pokemons: data,
      page,
    },
  };
};

export default function Home({
  pokemons,
  page,
}: {
  pokemons: Pokemon[];
  page: number;
}) {
  return <PokemonPage queryPage={page} pokemons={pokemons} />;
}
