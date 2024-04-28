import React from "react";
import { Fade } from "react-awesome-reveal";
import { SkillsData } from "../../../data/Data";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import FlexWrapper from "../../../components/wrapper/FlexWrapper";
import FilterMenu from "../../../components/menu/FilterMenu";
import Skill from "../../../components/skill/Skill";
import S from "./Skills.styles";


const Skills: React.FC = () => {
  return (
    <S.Skills id={"skills"}>
      <SectionTitle title="Skills" />
      <S.SkillsMenu>
        <FilterMenu />
      </S.SkillsMenu>
      <FlexWrapper direction="row" wrap="wrap" justify="center" content="center" gapItem="20px">
        <Fade cascade damping={0.2} triggerOnce>
          {SkillsData.map((item, index) => <Skill key={index} iconId={item.iconId} title={item.title} /> )}
        </Fade>
      </FlexWrapper>
    </S.Skills>
  );
};


export default Skills