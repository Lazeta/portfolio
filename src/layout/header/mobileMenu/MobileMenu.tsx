import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import { S } from "../../../components/menu/headerMenu/HeaderMenu.styles";
import useMobileMenu from "../../../components/hooks/MobileMenuContext";
import useEscClose from "../../../components/hooks/useEscClose";
import { Menu } from "../../../components/menu/Menu";
// import { useEffect, useState } from 'react';

export const MobileMenu: React.FC = () => {
  const { isMenuOpen, openMenu, closeMenu } = useMobileMenu();
  // const [isRendered, setIsRendered] = useState(isMenuOpen);
  
  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
      // setTimeout(() => setIsRendered(false), 1000); // здесь 1000 — это время анимации в миллисекундах
    } else {
      // setIsRendered(true);
      openMenu();
    }
  };

  useEscClose();

  return (
    <S.MobileMenu>
      <BurgerButton onClick={toggleMenu} isOpen={isMenuOpen}/>
      {/* {isRendered && ( */}
        <>
          <S.MobileMenuPopup isClosing={!isMenuOpen} onClick={() => toggleMenu()}>
            <Menu onLinkClick={() => toggleMenu()}/>
          </S.MobileMenuPopup>
        </>
      {/* )} */}
    </S.MobileMenu>
  );
};