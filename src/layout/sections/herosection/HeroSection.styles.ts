import styled from "styled-components";
import FlexWrapper from "../../../components/wrapper/FlexWrapper";
import myTheme from "../../../styles/global/MyTheme.styled";


type StyledProps = {
  isClosing: boolean;
}

const HeroSection = styled.section`
  width: auto;
  min-height: 250px;
  margin: 50px auto;
`;

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

const CustomFlexWrapper = styled(FlexWrapper)`
  @media ${myTheme.media.mobile} {
    gap: 0;
  }
`;

const Overlay = styled.div<StyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 6;
  animation: ${props => props.isClosing ? 'disappear 0.7s forwards' : 'appear 0.7s forwards'};

  @keyframes appear {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const ModalPopupForm = styled.div<StyledProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 99;
  animation: ${props => props.isClosing ? 'disappear 0.7s forwards' : 'appear 0.7s forwards'};

  @keyframes appear {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`

const TitleSecond = styled.h2`
  color: ${myTheme.colors.any};
  font-size: 4rem;
  margin: 0;
`;

const Hidden = styled.h1`
  display: none;
`

const S = {
  CustomFlexWrapper,
  ModalPopupForm,
  HeroSection,
  TitleSecond,
  Paragraph,
  Overlay,
  Hidden,
  Title,
};


export default S