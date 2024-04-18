import styled from "styled-components";
import { myTheme } from "../../../styles/global/MyTheme.styled";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";

const Title = styled.h1`
  color: ${myTheme.colors.secondary};
`;

const Paragraph = styled.p`
  color: ${myTheme.colors.secondary};
  max-width: 800px;
  padding: 0 0px 20px 0;

  @media ${myTheme.media.mobile} {
    max-width: 100%;
  }
`;

const HeroSection = styled.section`
  width: auto;
  min-height: 250px;
`;

const CustomFlexWrapper = styled(FlexWrapper)`
  @media ${myTheme.media.mobile} {
    gap: 0;
  }
`;

const Container = styled.div`
    Button { 
        margin-bottom: 20px;
    }
`;

const TitleSecond = styled.h2`
  color: ${myTheme.colors.any};
  font-size: 4rem;
  margin: 0;
`;

const Hidden = styled.h1`
  display: none;
`

export const S = {
  Title,
  Paragraph,
  HeroSection,
  CustomFlexWrapper,
  Container,
  TitleSecond,
  Hidden,
};
