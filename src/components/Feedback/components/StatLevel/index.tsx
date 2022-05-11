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
      <S.StatsTexts>{parsedName}</S.StatsTexts>
      <S.StatsTexts>{value}</S.StatsTexts>
      <ProgressBar value={value} />
    </S.Container>
  );
}
