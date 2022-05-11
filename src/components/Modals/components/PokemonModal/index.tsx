import { Pokemon } from "../../../../pages/api/pokemon";
import {
  getPokemonTypeColor,
  pokemonTypesColors,
} from "../../../../utils/pokemonTypesColors";
import { ProgressBar } from "../../../Feedback/components/ProgressBar";
import { StatLevel } from "../../../Feedback/components/StatLevel";
import * as S from "./styles";

interface PokemonModalProps {
  pokemon: Pokemon;
  children?: React.ReactNode;
  closeModal(): void;
}

export function PokemonModal({
  children,
  closeModal,
  pokemon,
}: PokemonModalProps) {
  return (
    <S.ModalBackground onClick={closeModal}>
      <S.Modal>
        <S.ImageAndTypesContainer>
          <S.PokemonImage
            alt={`${pokemon.name} image`}
            src={pokemon.sprites.front_default}
          />
          <S.PokemonTypesContainer>
            {pokemon.types.map(({ type }) => {
              const color = getPokemonTypeColor(type.name);

              console.log({ color });

              return (
                <S.PokemonType key={type.name} color={color}>
                  {type.name.toUpperCase()}
                </S.PokemonType>
              );
            })}
          </S.PokemonTypesContainer>
        </S.ImageAndTypesContainer>

        <S.StatsContainer>
          {pokemon.stats.map(({ base_stat, stat }) => (
            <StatLevel
              key={`${stat.name}-${base_stat}`}
              name={stat.name}
              value={base_stat}
            />
          ))}
        </S.StatsContainer>
      </S.Modal>
    </S.ModalBackground>
  );
}
