import { useRouter } from "next/router";

import * as S from "./styles";

export function NavBar() {
  const { push } = useRouter();

  return (
    <S.Container>
      <S.NavLink onClick={() => push("/")}>Home</S.NavLink>
      <S.NavLink onClick={() => push("/favorites")}>Favoritos</S.NavLink>
    </S.Container>
  );
}
