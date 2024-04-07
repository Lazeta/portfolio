import React from "react";
import { S } from "../../headerMenu/HeaderMenu.styles";

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({isOpen, onClick }) => {
  return (
    <S.BurgerButton isOpen={isOpen} onClick={onClick}>
      <div className={`bars ${isOpen ? "open" : ""}`} />
    </S.BurgerButton>
  );
};