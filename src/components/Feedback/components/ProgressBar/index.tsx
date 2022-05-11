import * as S from "./styles";

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({ value }: ProgressBarProps) {
  return <S.Progress max={100} value={value} />;
}
