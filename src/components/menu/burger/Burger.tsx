import React from "react";
import styled from "styled-components";

type BurgerProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ isMenuOpen, onClick }) => {
  return (
    <BurgerWrapper onClick={onClick} isMenuOpen={isMenuOpen}>
      <Line />
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "rotate(90deg)" : "rotate(0)"};

  &:before,
  &:after {
    content: "";
    width: 30px;
    height: 3px;
    background-color: #eeffee;
    margin-bottom: 6px;
    transition: transform 0.3s ease;
  }

  &:before {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen
        ? "rotate(-90deg) translate(-6px, 0)"
        : "rotate(0) translate(0, -6px)"};
  }

  &:after {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen
        ? "rotate(90deg) translate(-6px, 0)"
        : "rotate(0) translate(0, 6px)"};
  }
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: #eeffee;
  margin-bottom: 6px;
`;