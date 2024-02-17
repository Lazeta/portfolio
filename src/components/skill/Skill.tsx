import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";
import { Icon } from "../icon/Icon";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <div>
      <Icon iconId={props.iconId} width="auto" height="100px" />
      <SkillTitle>{props.title}</SkillTitle>
    </div>
  );
};

const SkillTitle = styled.div`
  max-width: 100px;
  min-height: 40px;
  text-align: center;
  color: ${myTheme.colors.secondary};
  padding: 10px 0 0 0;
`;