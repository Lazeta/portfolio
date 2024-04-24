import { S } from "../headerMenu/HeaderMenu.styles";

type BurgerButtonProps = {
  open?: boolean;
  onClick: () => void;
};

export const BurgerButton:React.FC<BurgerButtonProps> = (props:BurgerButtonProps) => {
  return ( 
  <>
    <S.BurgerButton onClick={props.onClick}/>
  </> )
};