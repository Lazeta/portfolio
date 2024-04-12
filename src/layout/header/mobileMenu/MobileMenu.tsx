import React, { useEffect, useState } from "react";
import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import { ListItem } from "../../../components/listItem/ListItem";
import { S } from "../../../components/headerMenu/HeaderMenu.styles";

type MobileMenuPopupProps = {
  isOpen: boolean;
  menuItems: Array<string>;
};

export const MobileMenu: React.FC<MobileMenuPopupProps> = (props: MobileMenuPopupProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleEscKey = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <S.MobileMenu>
      <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <S.MobileMenuPopup menuItems={props.menuItems} isOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <ListItem menuItems={props.menuItems}/>
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
