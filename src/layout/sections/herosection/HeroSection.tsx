import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import useCloseOnOutsideClick from "../../../components/hooks/HandleClickOutside";
import ModalContext from "../../../components/hooks/ModalContext";
import useEscClose from "../../../components/hooks/useEscClose";
import Button from "../../../components/buttons/Button";
import Form from "../../../components/forms/Form";
import Logo from "./logo/Logo";
import S from "./HeroSection.styles";


const HeroSection: React.FC = () => {
  const { modalOpen, isClosing, openModal, startCloseModal } = useContext(ModalContext);
  const formRef = useCloseOnOutsideClick();

  useEscClose();

  return (
    <S.HeroSection id={"home"}>
      <S.CustomFlexWrapper justify="space-between" gapItem="40px">
        <div>
          <S.Hidden>Frontend Developer</S.Hidden>
          <S.Title>
            <Typewriter options={{
                strings: ["Frontend Developer", "React JavaScript TypeScript"],
                autoStart: true,
                loop: true,
              }}
            />
          </S.Title>
          <S.TitleSecond>Chekh Stas</S.TitleSecond>
          <S.Paragraph>I Develop in React, TypeScript, JavaScript</S.Paragraph>
          <Button title="Contact Me" width={"150px"} font={"1.2rem"}
            onClick={() => {openModal("ContactMeFormModal")}}
          />
          {modalOpen === "ContactMeFormModal" && (
            <>
              <S.Overlay onClick={startCloseModal} isClosing={isClosing}/>
              <S.ModalPopupForm isClosing={isClosing} ref={formRef}>
                <Form />
              </S.ModalPopupForm>
            </>
          )} 
        </div>
        <Logo />
      </S.CustomFlexWrapper>
    </S.HeroSection>
  );
};


export default HeroSection