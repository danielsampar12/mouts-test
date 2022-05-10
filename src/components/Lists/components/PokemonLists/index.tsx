import React, { Dispatch, SetStateAction } from "react";
import { Pokemon } from "../../../../pages/api/pokemon";
import { GlassCard } from "../../../Cards/components/GlassCard";

import * as S from "./styles";

interface PokemonsList {
  pokemons: Pokemon[];
  openModal(): void;
  setModalPokemon: Dispatch<SetStateAction<Pokemon | null>>;
}

export function PokemonLists({
  pokemons,
  openModal,
  setModalPokemon,
}: PokemonsList) {
  const handleOnClick = (modalPokemon: Pokemon) => {
    setModalPokemon(modalPokemon);

    openModal();
  };

  return (
    <S.Container>
      {pokemons.map((pokemon) => (
        <GlassCard
          onClick={() => handleOnClick(pokemon)}
          pokemon={pokemon}
          key={pokemon.id}
        />
      ))}
    </S.Container>
  );
}
