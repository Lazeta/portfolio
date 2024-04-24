import ModalContext from "../../../components/hooks/ModalContext";
import React, { useRef, useContext } from "react";
import { Button } from "../../../components/buttons/Button";
import { Form } from "../../../components/forms/Form";
import Typewriter from "typewriter-effect";
import { S } from "./HeroSection.styles";
import { Logo } from "./logo/Logo";
import useEscClose from "../../../components/hooks/useEscClose";

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { modalOpen, openModal, closeModal } = useContext(ModalContext);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            onClick={() => {scrollToSection(); openModal("ContactMeFormModal")}}
          />
          {modalOpen === "ContactMeFormModal" && (
            <>
              <S.Overlay onClick={closeModal} />
              <S.ModalPopupForm>
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