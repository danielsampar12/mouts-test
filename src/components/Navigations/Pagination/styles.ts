import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding-right: 64px;
  padding-bottom: 16px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const ButtonsContainer = styled.div``;

export const Button = styled.div`
  width: 64px;
  height: 64px;

  margin: 8px;

  background-color: #353646;
  color: #fff;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Spacer = styled.div`
  width: 64px;
`;
