import React from "react";
import { Button } from "../../../components/buttons/Button";
import { Logo } from "./logo/Logo";
import { S } from "./HeroSection.styles";
import Typewriter from "typewriter-effect";

export const HeroSection: React.FC = () => {
  return (
    <S.HeroSection id={'about'}>
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
            I have been developing web applications since 2019. Previously, 
            I was interested in algorithmic trading in C#, 
            then Python and the development of simple pixel games in Unity.
            I study front-end from layout markdown to JavaScript frameworks and various stack technologies. 
            I approach a task creatively and bring the task to completion, 
            i have a sense of style and believe that logic should not only work, but also be pleasing to the eye.
          </S.Paragraph>
          <Button title={"Contact Me"} width={"150px"} font={"1.2rem"} />
        </S.Container>
        <Logo />
      </S.CustomFlexWrapper>
    </S.HeroSection>
  );
};
