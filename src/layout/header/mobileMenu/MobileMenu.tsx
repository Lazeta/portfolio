import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import { S } from "../../../components/menu/headerMenu/HeaderMenu.styles";
import ModalContext from "../../../components/hooks/ModalContext";
import useEscClose from "../../../components/hooks/useEscClose";
import { Menu } from "../../../components/menu/Menu";
import React, { useContext } from "react";
import useCloseOnOutsideClick from "../../../components/hooks/HandleClickOutside";

export const MobileMenu: React.FC = () => {
  const { modalOpen, isClosing, openModal, startCloseModal } = useContext(ModalContext);
  const modalRef = useCloseOnOutsideClick();

  useEscClose();

  return (
    <S.MobileMenu>
      <BurgerButton onClick={() => { openModal("MobileMenu")}} open={false}/>
      {modalOpen === "MobileMenu" && (
        <>
          <S.Overlay onClick={startCloseModal} isClosing={isClosing}/>
          <S.MobileMenuPopup isClosing={isClosing} ref={modalRef}>
            <Menu onLinkClick={startCloseModal}/>
          </S.MobileMenuPopup>
        </>
      )}




      {/* <BurgerButton
        onClick={() => modalOpen === "MobileMenu"
            ? startCloseModal()
            : openModal("MobileMenu")}
        isOpen={modalOpen === "MobileMenu"}
      />
      {modalOpen === "MobileMenu" && (
        <S.MobileMenuPopup
          onClick={() => modalOpen === "MobileMenu"
              ? startCloseModal()
              : openModal("MobileMenu")}
          isOpen={modalOpen === "MobileMenu"}>
          <Menu onLinkClick={startCloseModal} />
        </S.MobileMenuPopup>
      )} */}
    </S.MobileMenu>
  );
};
