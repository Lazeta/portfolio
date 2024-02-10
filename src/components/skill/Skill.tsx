import { title } from "process";
import styled from "styled-components";
import { Icon } from "../icon/icon";
import { SectionTitle } from "../sectionTitle/SectionTitle";

type SkillPropsType = {
  iconId: string;
  
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} width="auto" height="100px" />
      {/* <SkillTitle></SkillTitle> */}
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  display: block;
`;

const SkillTitle = styled.div`
  border: 1px solid blue;
  width: 100px;
  height: 100px;
`;
