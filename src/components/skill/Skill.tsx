import React from "react";
import styled from "styled-components";
import myTheme from "../../styles/global/MyTheme.styled";
import Icon from "../icon/Icon";


type SkillPropsType = {
  iconId: string;
  title: string;
  index?: number;
};

const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
  const {iconId, title, index} = props;

  return (
    <div key={index}>
      <Icon iconId={iconId} width="100px" height="100px" />
      <SkillTitle>{title}</SkillTitle>
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


export default Skill