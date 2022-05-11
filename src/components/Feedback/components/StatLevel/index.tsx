import { ProgressBar } from "../ProgressBar";
import * as S from "./styles";

interface StatLevelProps {
  name: string;
  value: number;
}

export function StatLevel({ name, value }: StatLevelProps) {
  const parsedName = name.replace("-", " ").toUpperCase();

  return (
    <S.Container>
      <S.StatName>{parsedName}</S.StatName>
      <S.StatValue>{value}</S.StatValue>
      <ProgressBar value={value} />
    </S.Container>
  );
}
