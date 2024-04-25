import { S } from "../headerMenu/HeaderMenu.styles";

type BurgerButtonProps = {
  isOpen?: boolean;
  onClick: () => void;
};

export const BurgerButton:React.FC<BurgerButtonProps> = ({ onClick, isOpen = false}) => {
  console.log('Is menu open:', isOpen)
  return ( 
    <S.BurgerButton onClick={onClick} isOpen={isOpen}>
      <div className="bars"></div>
    </S.BurgerButton>
  )
};