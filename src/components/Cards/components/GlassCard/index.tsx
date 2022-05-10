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
        <S.PokemonImage src={pokemon.sprites.front_default} />
        <h2>{pokemon.name}</h2>
      </S.CardContent>
    </S.Card>
  );
}
