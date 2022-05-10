import styled from "styled-components";

export const Card = styled.button`
  all: unset;
  cursor: pointer;

  position: relative;
  height: 280px;
  width: 400px;
  margin: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);

  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  :hover {
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokemonImage = styled.img`
  height: 120px;
  width: 120px;
`;
