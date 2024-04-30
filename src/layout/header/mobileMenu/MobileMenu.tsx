import useMobileMenu from "../../../components/hooks/MobileMenuContext";
import useEscClose from "../../../components/hooks/useEscClose";
import Menu from "../../../components/menu/Menu";
import BurgerButton from "../../../components/menu/burger/BurgerButton";
import S from "../../../components/menu/headerMenu/HeaderMenu.styles";


const MobileMenu: React.FC = () => {
  const { isMenuOpen, openMenu, closeMenu } = useMobileMenu();
  
  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEscClose();

  return (
    <S.MobileMenu>
      <BurgerButton onClick={toggleMenu} isOpen={isMenuOpen}/>
        <>
          <S.MobileMenuPopup isClosing={!isMenuOpen} onClick={() => toggleMenu()}>
            <Menu onLinkClick={() => toggleMenu()}/>
          </S.MobileMenuPopup>
        </>
    </S.MobileMenu>
  );
};


export default MobileMenu