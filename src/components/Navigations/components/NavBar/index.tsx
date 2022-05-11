import { useRouter } from "next/router";

import * as S from "./styles";

export function NavBar() {
  const router = useRouter();

  return (
    <S.Container>
      <S.NavLink onClick={() => router.push("/")}>Home</S.NavLink>
      <S.NavLink onClick={() => router.push("/favorites")}>Favoritos</S.NavLink>
    </S.Container>
  );
}
