import { GetServerSideProps } from "next";
import { PokemonPage } from "../../components/Pages/components/PokemonPage";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query);

  localStorage.getItem("");

  return {
    props: {},
  };
};

export default function Favorites() {
  return <PokemonPage pokemons={[]} />;
}
