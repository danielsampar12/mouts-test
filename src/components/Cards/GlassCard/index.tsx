import { Pokemon } from "../../../pages/api/pokemon";
import * as S from "./styles";

interface GlassCardProps {
  pokemon: Pokemon;
}

export function GlassCard({ pokemon }: GlassCardProps) {
  return (
    <S.Card>
      <h2>{pokemon.name}</h2>
    </S.Card>
  );
}
