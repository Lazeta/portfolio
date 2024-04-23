import React, { useEffect, useState } from "react";
import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import { S } from "../../../components/menu/headerMenu/HeaderMenu.styles";
import { Menu } from "../../../components/menu/Menu";

type MobileMenuPopupProps = {
  isOpen: boolean;
};

export const MobileMenu: React.FC<MobileMenuPopupProps> = (props: MobileMenuPopupProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleEscKey = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setIsMenuOpen(!isMenuOpen);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }); //   }, []); в данном контексте передавать зависимость нет необходимости дабы избежать бесконечного перерендера самого себя.

  return (
    <S.MobileMenu>
      <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <S.MobileMenuPopup isOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <Menu onLinkClick={toggleMenu}/>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
