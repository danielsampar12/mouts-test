import { Pokemon } from "../../../../pages/api/pokemon";
import { getPokemonTypeColor } from "../../../../utils/pokemonTypesColors";
import { FavoriteButton } from "../../../Buttons/components/FavoriteButton";
import { StatLevel } from "../../../Feedback/components/StatLevel";
import * as S from "./styles";

interface PokemonModalProps {
  pokemon: Pokemon;
  isFavoritePage?: boolean;
  closeModal(): void;
}

export function PokemonModal({
  closeModal,
  pokemon,
  isFavoritePage,
}: PokemonModalProps) {
  return (
    <S.ModalBackground onClick={closeModal}>
      <S.Modal>
        <S.ModalContentContainer>
          <S.ImageAndTypesContainer>
            <S.PokemonImage
              alt={`${pokemon.name} image`}
              src={pokemon.sprites.front_default}
            />
            <S.PokemonTypesContainer>
              {pokemon.types.map(({ type }) => {
                const color = getPokemonTypeColor(type.name);

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
        </S.ModalContentContainer>

        <FavoriteButton isFavorited={isFavoritePage} pokemon={pokemon} />
      </S.Modal>
    </S.ModalBackground>
  );
}
