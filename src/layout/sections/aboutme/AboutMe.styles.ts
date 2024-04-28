import styled from "styled-components";
import myTheme from "../../../styles/global/MyTheme.styled";


const AboutMe = styled.section`
  max-width: 800px;
  width: 100%;
  margin: 100px auto;
`;

const VerticalLine = styled.div``

const Paragraph = styled.p`
    color: ${myTheme.colors.secondary};
`

const S = {
    AboutMe,
    VerticalLine,
    Paragraph,
}


export default S