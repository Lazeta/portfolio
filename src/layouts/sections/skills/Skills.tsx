import styled from "styled-components";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";
import { Skill } from "../../../components/skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle title="Skills" />
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="space-between"
        content="space-between"
        gapItem="20px"
      >
        <Skill iconId={"html5SvgrepoCom"}/>
        <Skill iconId={"gitSvgrepoCom"}/>
        <Skill iconId={"css3SvgrepoCom"}/>
        <Skill iconId={"gmailSvgrepoCom"}/>
        <Skill iconId={"linkedinSvgrepoCom"}/>
        <Skill iconId={"reduxSvgrepoCom"}/>
        <Skill iconId={"vscodeSvgrepoCom"}/>
        <Skill iconId={"bemSvgrepoCom"}/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  max-width: 100%;
  max-height: 100%;
  padding: 20px 0;
  border: 1px solid pink;
`;
