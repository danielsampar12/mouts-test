import styled from "styled-components";

interface FavoriteButtonProps {
  isFavorited: boolean;
}

export const Button = styled.button<FavoriteButtonProps>`
  all: unset;

  width: 280px;
  height: 64px;

  margin-top: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isFavorited }) => (isFavorited ? "#fff" : "#ff6861")};

  border-radius: 10px;

  font-size: 24px;
  color: ${({ isFavorited }) => (isFavorited ? "#ff6861" : "#fff")};

  border: ${({ isFavorited }) =>
    isFavorited ? "1px solid #ff6861" : undefined};

  cursor: pointer;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;

  width: 100%;
`;
