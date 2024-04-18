import { S } from "../headerMenu/HeaderMenu.styles";

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const BurgerButton = (props: BurgerButtonProps) => {
  const {isOpen, onClick} = props
  return (
    <S.BurgerButton 
      isOpen={isOpen} 
      onClick={onClick}
    >
      <div className={`bars ${isOpen ? "open" : ""}`} />
    </S.BurgerButton>
  );
};