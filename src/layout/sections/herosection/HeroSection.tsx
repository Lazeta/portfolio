import { Button } from "../../../components/buttons/Button";
import { Form } from "../../../components/forms/Form";
import React, { useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { S } from "./HeroSection.styles";
import { Logo } from "./logo/Logo";

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showForm, setShowForm] = useState(false);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(prefState => !prefState);
  };

  return (
    <S.HeroSection id={"home"}>
      <S.CustomFlexWrapper justify="space-between" gapItem="40px">
        <S.Container>
          <S.Hidden>Frontend Developer</S.Hidden>
          <S.Title>
            <Typewriter
              options={{
                strings: ["Frontend Developer", "React JavaScript TypeScript"],
                autoStart: true,
                loop: true,
              }}
            />
          </S.Title>
          <S.TitleSecond>Chekh Stas</S.TitleSecond>
          <S.Paragraph>I Develop in React, TypeScript, JavaScript</S.Paragraph>
          <Button
            title="Contact Me"
            width={"150px"}
            font={"1.2rem"}
            onClick={() => {
              scrollToSection();
              toggleFormVisibility();
            }}
          />
          <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
            {showForm && (
              
              <>
                <S.Overlay onClick={toggleFormVisibility} />
                <S.ModalPopupForm>
                  <Form />
                </S.ModalPopupForm>
              </>
            )}
          </div>
        </S.Container>
        <Logo />
      </S.CustomFlexWrapper>
    </S.HeroSection>
  );
};
