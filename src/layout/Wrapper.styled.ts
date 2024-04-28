import styled from "styled-components";
import myTheme from "../styles/global/MyTheme.styled";


const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${myTheme.colors.theme};
  margin: 0 auto;
  padding: 0 2%;

  @media ${myTheme.media.mobileSlide} {
    padding: 0 20px;
  }
`;


export default Wrapper