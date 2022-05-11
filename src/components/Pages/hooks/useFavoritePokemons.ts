import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "../../../pages/api/pokemon";

const useFavoritePokemons = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

  const getFavoritePokemons = useCallback(() => {
    const pokemons = localStorage.getItem("pokemons");

    console.log(pokemons);
  }, []);

  useEffect(() => {
    getFavoritePokemons();
  }, [getFavoritePokemons]);
};

export default useFavoritePokemons;
