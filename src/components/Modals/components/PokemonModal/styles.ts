import styled from "styled-components";

export const Modal = styled.div`
  position: relative;
  height: 600px;
  width: 800px;
  margin: 30px;

  padding: 0 16px;

  opacity: 1;
  transition: opacity linear 0.25s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  z-index: 3;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ModalBackground = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  opacity: 1;
  transition: opacity linear 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;

  width: 100vw;
  min-height: 100vh;
  margin: 0;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
`;

export const ImageAndTypesContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const PokemonImage = styled.img`
  height: 300px;
  width: 300px;
`;

export const PokemonTypesContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonType = styled.p`
  font-size: 24px;
  margin: 8px;

  color: ${({ color }) => color};
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;
