import React from "react";
import styled from "styled-components";
import { myTheme } from "../../global/MyTheme.styled";

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <StyledBurgerButton isOpen={isOpen} onClick={onClick}>
      <div className={`bars ${isOpen ? "open" : ""}`} />
    </StyledBurgerButton>
  );
};

const StyledBurgerButton = styled.div<BurgerButtonProps>`
  display: flex;
  position: fixed;
  top: 30px;
  right: 30px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 100;

  .bars {
    position: relative;
    width: 40px;
    height: 2px;
    background-color: ${myTheme.colors.secondary};
    transition: all 0.3s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${myTheme.colors.secondary};
      transition: all 0.3s ease-in-out;
    }

    &::before {
      top: -12px;
    }

    &::after {
      bottom: -12px;
    }
  }

  .bars.open {
    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(45deg);
    }

    &::after {
      bottom: 0;
      transform: rotate(-45deg);
    }
  }
`;
