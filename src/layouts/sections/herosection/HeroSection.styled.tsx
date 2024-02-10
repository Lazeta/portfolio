import styled from "styled-components";
import { myTheme } from "../../../components/global/MyTheme.styled";
import logo from "../../../assets/images/logo.jpg";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <FlexWrapper justify="space-between">
        <div>
          <StyledTitle>Frontend Developer</StyledTitle>
          <h2>Chekh Stas</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            obcaecati earum tempore non officiis nisi incidunt sapiente
            temporibus ipsa? Sint quas facilis eum sequi laborum ad nobis nulla
            vitae perspiciatis!
          </p>
          <button style={{ background: myTheme.colors.primary }}>
            Contact Me
          </button>
        </div>
        <img src={logo} alt="#" />
      </FlexWrapper>
    </StyledHeroSection>
  );
};

const StyledHeroSection = styled.div`
  width: auto;
  min-height: 250px;
  border: 1px solid green;
`;

const StyledTitle = styled.h1``;
