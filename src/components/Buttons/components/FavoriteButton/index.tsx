import { FiHeart, FiTrash } from "react-icons/fi";
import { useFavoritePokemons } from "../../../../hooks/favoritePokemons";

import { Pokemon } from "../../../../pages/api/pokemon";
import * as S from "./styles";

interface FavoriteButtonProps {
  pokemon: Pokemon;
  isFavorited?: boolean;
}

export function FavoriteButton({
  pokemon,
  isFavorited = false,
}: FavoriteButtonProps) {
  const { addPokemonToFavorites, removeFromFavorites } = useFavoritePokemons();

  const handleClick = () => {
    if (isFavorited) {
      removeFromFavorites(pokemon.id);
    } else {
      addPokemonToFavorites(pokemon);
    }
  };

  return (
    <S.Button isFavorited={isFavorited} onClick={handleClick}>
      {isFavorited ? (
        <S.ButtonContent>
          <FiTrash /> Tirar dos favoritos
        </S.ButtonContent>
      ) : (
        <S.ButtonContent>
          <FiHeart /> Favoritar pokemon
        </S.ButtonContent>
      )}
    </S.Button>
  );
}
