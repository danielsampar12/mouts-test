import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  justify-content: flex-end;

  width: 100%;
`;

export const StatsTexts = styled.p`
  font-size: 18px;

  padding-right: 12px;

  @media (max-width: 800px) {
    font-size: 14px;

    padding-right: 4px;
  }
`;
