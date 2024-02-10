import styled from "styled-components";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle title="Skills" />
      <FlexWrapper></FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  min-width: 600px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  border: 1px solid pink;
`;
