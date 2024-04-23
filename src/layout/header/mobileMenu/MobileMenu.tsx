import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import useModalToggle from "../../../components/hooks/useModalToggle";
import { S } from "../../../components/menu/headerMenu/HeaderMenu.styles";
import ModalContext from "../../../components/functions/ModalContext";
import { Menu } from "../../../components/menu/Menu";
import React, { useContext, useEffect } from "react";

type MobileMenuPopupProps = {
  isOpen: boolean;
};

export const MobileMenu: React.FC<MobileMenuPopupProps> = () => {
  const {isModalOpen: isMenuOpen } = useModalToggle();
  const { modalOpen, openModal, closeModal } = useContext(ModalContext);

  useEffect(() => {
    // function handleEscKey now always will be closed form
    const handleEscKey = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }); //   }, []); в данном контексте передавать зависимость нет необходимости дабы избежать бесконечного перерендера самого себя.

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