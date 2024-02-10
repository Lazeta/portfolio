import { title } from "process";
import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";
import { Icon } from "../icon/icon";
import { SectionTitle } from "../sectionTitle/SectionTitle";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} width="auto" height="100px" />
      <SkillTitle>{props.title}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  
`;

const SkillTitle = styled.div`
  /* border: 1px solid blue; */
  max-width: 100px;
  min-height: 40px;
  text-align: center;
  color: ${myTheme.colors.secondary};
  padding: 10px 0 0 0;
  /* word-wrap: break-word; */
  /* overflow-wrap: break-word; */
`
