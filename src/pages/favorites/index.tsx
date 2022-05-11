import { PokemonPage } from "../../components/Pages/components/PokemonPage";
import { useFavoritePokemons } from "../../hooks/favoritePokemons";

export default function Favorites() {
  const { favoritePokemons } = useFavoritePokemons();

  return <PokemonPage isFavoritePage pokemons={favoritePokemons} />;
}
