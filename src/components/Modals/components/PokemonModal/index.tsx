import { Pokemon } from "../../../../pages/api/pokemon";
import * as S from "./styles";

interface PokemonModalProps {
  pokemon: Pokemon;
  children?: React.ReactNode;
  closeModal(): void;
}

export function PokemonModal({ children, closeModal }: PokemonModalProps) {
  return (
    <S.ModalBackground onClick={closeModal}>
      <S.Modal>{children}</S.Modal>
    </S.ModalBackground>
  );
}
