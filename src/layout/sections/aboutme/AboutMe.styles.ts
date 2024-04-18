import styled from "styled-components";
import { myTheme } from "../../../styles/global/MyTheme.styled";


const AboutMe = styled.section`
  max-width: 700px;
  width: 100%;
`;

const VerticalLine = styled.div``

const Paragraph = styled.p`
    color: ${myTheme.colors.secondary}
`

export const S = {
    AboutMe,
    VerticalLine,
    Paragraph,
}