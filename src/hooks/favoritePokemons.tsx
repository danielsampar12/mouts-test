import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Pokemon } from "../pages/api/pokemon";

interface UseFavoritePokemonsProps {
  children?: React.ReactNode;
}

interface UseFavoritePokemons {
  favoritePokemons: Pokemon[];

  removeFromFavorites(pokemonId: string): void;
  addPokemonToFavorites(pokemon: Pokemon): void;
}

const UseFavoritePokemonsContext = createContext<UseFavoritePokemons | null>(
  null
);

const UseFavoritePokemonsProvider = ({
  children,
}: UseFavoritePokemonsProps) => {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

  const getFavoritePokemons = useCallback(() => {
    const storagePokemons = localStorage.getItem("USER_POKEMONS");

    const data = JSON.parse(storagePokemons || JSON.stringify([]));

    setFavoritePokemons(data);
  }, []);

  const addPokemonToFavorites = useCallback(
    (pokemon: Pokemon) => {
      localStorage.setItem(
        "USER_POKEMONS",
        JSON.stringify([...favoritePokemons, pokemon])
      );

      setFavoritePokemons([...favoritePokemons, pokemon]);
    },
    [favoritePokemons]
  );

  const removeFromFavorites = useCallback(
    (pokemonId: string) => {
      const filteredPokemonArray = favoritePokemons.filter(
        ({ id }) => id !== pokemonId
      );

      localStorage.setItem(
        "USER_POKEMONS",
        JSON.stringify(filteredPokemonArray)
      );

      setFavoritePokemons(filteredPokemonArray);
    },
    [favoritePokemons]
  );

  useEffect(() => {
    getFavoritePokemons();
  }, [getFavoritePokemons]);

  const value = useMemo(
    () => ({ addPokemonToFavorites, favoritePokemons, removeFromFavorites }),
    [addPokemonToFavorites, favoritePokemons, removeFromFavorites]
  );

  return (
    <UseFavoritePokemonsContext.Provider value={value}>
      {children}
    </UseFavoritePokemonsContext.Provider>
  );
};

function useFavoritePokemons(): UseFavoritePokemons {
  const context = useContext(UseFavoritePokemonsContext);

  if (!context) {
    throw new Error("useFavoritePokemons must be used within a CartProvider");
  }

  return context;
}

export { UseFavoritePokemonsProvider, useFavoritePokemons };
