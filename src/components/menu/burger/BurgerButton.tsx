import S from "../headerMenu/HeaderMenu.styles";


type BurgerButtonProps = {
  isOpen?: boolean;
  onClick: () => void;
};

const BurgerButton:React.FC<BurgerButtonProps> = ({ onClick, isOpen = false}) => (
  <S.BurgerButton onClick={onClick} isOpen={isOpen}>
    <div className="bars"></div>
  </S.BurgerButton>
)


export default BurgerButton