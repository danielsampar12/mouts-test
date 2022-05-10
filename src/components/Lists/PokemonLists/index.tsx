import React from "react";
import { Pokemon } from "../../../pages/api/pokemon";
import { GlassCard } from "../../Cards/GlassCard";

import * as S from "./styles";

interface PokemonsList {
  pokemons: Pokemon[];
}

export function PokemonLists({ pokemons }: PokemonsList) {
  return (
    <S.Container>
      {pokemons.map((pokemon) => (
        <GlassCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </S.Container>
  );
}
