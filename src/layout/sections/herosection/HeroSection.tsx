import { Button } from "../../../components/buttons/Button";
import { Logo } from "../../../components/logo/Logo";
import { S } from "./HeroSection.styles";

export const HeroSection = () => {
  return (
    <S.HeroSection>
      <S.CustomFlexWrapper justify="space-between" gapItem="40px">
        <S.Container>
          <S.Title>Frontend Developer</S.Title>
          <S.TitleSecond>Chekh Stas</S.TitleSecond>
          <S.Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            obcaecati earum tempore non officiis nisi incidunt sapiente
            temporibus ipsa? Sint quas facilis eum sequi laborum ad nobis nulla
            vitae perspiciatis!
          </S.Paragraph>
          <Button title={"Contact Me"} width={"150px"} font={"1.2rem"} />
        </S.Container>
        <Logo />
      </S.CustomFlexWrapper>
    </S.HeroSection>
  );
};
