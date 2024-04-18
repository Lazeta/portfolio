import styled from "styled-components";
import { myTheme } from "../../styles/global/MyTheme.styled";
import { Icon } from "../icon/Icon";
import React from "react";

type SkillPropsType = {
  iconId: string;
  title: string;
  index?: number;
};

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <div key={props.index}>
      <Icon iconId={props.iconId} width="100px" height="100px" />
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