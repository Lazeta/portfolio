import styled from "styled-components";
import { myTheme } from "../../../components/global/MyTheme.styled";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Button } from "../../../components/buttons/Button";
import { Logo } from "../../../components/logo/Logo";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <CustomFlexWrapper justify="space-between" gapItem="40px">
        <div>
          <StyledTitle>Frontend Developer</StyledTitle>
          <h2>Chekh Stas</h2>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            obcaecati earum tempore non officiis nisi incidunt sapiente
            temporibus ipsa? Sint quas facilis eum sequi laborum ad nobis nulla
            vitae perspiciatis!
          </StyledParagraph>
          <Button title={"Contact Me"} width={"150px"} font={"1.2rem"} />
        </div>
        <Logo />
      </CustomFlexWrapper>
    </StyledHeroSection>
  );
};

const CustomFlexWrapper = styled(FlexWrapper)`
  @media ${myTheme.media.mobile} {
    gap: 0;
  }
`

const StyledHeroSection = styled.section`
  width: auto;
  min-height: 250px;
  > * > * p,
  .Button {
    padding: 0 0px 20px 0;
  }

  > * > * h2 {
    color: ${myTheme.colors.any};
    font-size: 4rem;
    margin: 0;
  }
`;

const StyledTitle = styled.h1`
  color: ${myTheme.colors.secondary};
`;

const StyledParagraph = styled.p`
  color: ${myTheme.colors.secondary};
  max-width: 800px;

  @media ${myTheme.media.mobile} {
    max-width: 100%;
  }
`;
