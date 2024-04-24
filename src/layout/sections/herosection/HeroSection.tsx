import useCloseOnOutsideClick from "../../../components/hooks/HandleClickOutside";
import ModalContext from "../../../components/hooks/ModalContext";
import useEscClose from "../../../components/hooks/useEscClose";
import { Button } from "../../../components/buttons/Button";
import { Form } from "../../../components/forms/Form";
import Typewriter from "typewriter-effect";
import React, { useContext } from "react";
import { S } from "./HeroSection.styles";
import { Logo } from "./logo/Logo";

export const HeroSection: React.FC = () => {
  const { modalOpen, isClosing, openModal, startCloseModal } = useContext(ModalContext);
  const formRef = useCloseOnOutsideClick();

  useEscClose();

  return (
    <S.HeroSection id={"home"}>
      <S.CustomFlexWrapper justify="space-between" gapItem="40px">
        <S.Container>
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
        </S.Container>
        <Logo />
      </S.CustomFlexWrapper>
    </S.HeroSection>
  );
};

// функция скролла к секции в данном случае к рендеру новой секции в DOM по клику
  // const scrollToSection = () => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // <Button title="Contact Me" width={"150px"} font={"1.2rem"}
  // onClick={() => {scrollToSection(); openModal("ContactMeFormModal")}}