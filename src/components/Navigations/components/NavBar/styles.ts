import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;

  align-items: center;
  justify-content: center;

  padding-top: 16px;

  z-index: 2;
`;

export const NavLink = styled.a`
  position: relative;
  color: #1d1d1d;
  font-size: 1.6rem;
  margin: 0.3rem 2.4rem 0;
  text-decoration: none;
  text-align: center;

  &:hover {
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 0.3rem;
      background-color: #f00;
      animation: hoverAnimation 0.2s forwards;
    }

    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`;
