import { Pokemon } from "../../../../pages/api/pokemon";
import * as S from "./styles";

interface GlassCardProps {
  pokemon: Pokemon;
  onClick(): void;
}

export function GlassCard({ pokemon, onClick }: GlassCardProps) {
  return (
    <S.Card onClick={onClick}>
      <S.CardContent>
        <S.PokemonImage
          alt={`${pokemon.name} image`}
          src={pokemon.sprites.front_default}
        />
        <h3>{pokemon.name}</h3>
      </S.CardContent>
    </S.Card>
  );
}
