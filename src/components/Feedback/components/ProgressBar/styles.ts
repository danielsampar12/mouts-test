import styled from "styled-components";

interface ProgressProps {
  value: number;
  max: number;
}

export const Container = styled.div``;

export const Progress = styled.progress<ProgressProps>``;
