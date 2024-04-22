import React from "react";
import { Button } from "../../../components/buttons/Button";
import { Logo } from "./logo/Logo";
import { S } from "./HeroSection.styles";
import Typewriter from "typewriter-effect";

export const HeroSection: React.FC = () => {
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
          <S.Paragraph>
            I Develop in React, TypeScript, JavaScript
          </S.Paragraph>
          <Button title="Contact Me" width={"150px"} font={"1.2rem"}/>
        </S.Container>
        <Logo />
      </S.CustomFlexWrapper>
    </S.HeroSection>
  );
};
