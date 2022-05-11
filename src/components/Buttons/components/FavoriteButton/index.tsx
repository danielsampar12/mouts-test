import { useEffect, useState } from "react";
import { FiHeart, FiTrash } from "react-icons/fi";
import { useFavoritePokemons } from "../../../../hooks/favoritePokemons";

import { Pokemon } from "../../../../pages/api/pokemon";
import * as S from "./styles";

interface FavoriteButtonProps {
  pokemon: Pokemon;
}

export function FavoriteButton({ pokemon }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const { addPokemonToFavorites, removeFromFavorites, favoritePokemons } =
    useFavoritePokemons();

  useEffect(() => {
    const isInFavorites = favoritePokemons.find(({ id }) => id === pokemon.id);

    setIsFavorited(!!isInFavorites);
  }, [favoritePokemons, pokemon.id]);

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
