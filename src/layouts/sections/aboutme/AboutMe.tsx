import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <SectionTitle title="About me"/>
      <StyledVerticalLine>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          maiores consequuntur dolore quos in. Doloribus blanditiis aspernatur
          dignissimos provident, vitae dicta placeat sint nemo repudiandae ex,
          mollitia quaerat aperiam temporibus.
        </p>
      </StyledVerticalLine>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  width: auto;
  min-height: 150px;
`;

const StyledVerticalLine = styled.span`
  
`
