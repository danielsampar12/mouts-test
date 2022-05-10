import styled from "styled-components";

export const Modal = styled.div`
  position: relative;
  height: 400px;
  width: 600px;
  margin: 30px;

  opacity: 1;
  transition: opacity linear 0.25s;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  z-index: 2;
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
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
`;
