import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import useModalToggle from "../../../components/hooks/useModalToggle";
import { S } from "../../../components/menu/headerMenu/HeaderMenu.styles";
import ModalContext from "../../../components/hooks/ModalContext";
import { Menu } from "../../../components/menu/Menu";
import React, { useContext } from "react";
import useEscClose from "../../../components/hooks/useEscClose";

type MobileMenuPopupProps = {
  isOpen: boolean;
};

export const MobileMenu: React.FC<MobileMenuPopupProps> = () => {
  const {isModalOpen: isMenuOpen } = useModalToggle();
  const { modalOpen, openModal, closeModal } = useContext(ModalContext);

  useEscClose();

  return (
    <S.MobileMenu>
      <BurgerButton isOpen={isMenuOpen} 
                    onClick={() => openModal("MobileMenu")} />
      {modalOpen === "MobileMenu" && (
        <S.MobileMenuPopup isOpen={modalOpen === "MobileMenu"} onClick={closeModal}>
          <Menu onLinkClick={closeModal}/>
        </S.MobileMenuPopup>
      )}
    </S.MobileMenu>
  );
};