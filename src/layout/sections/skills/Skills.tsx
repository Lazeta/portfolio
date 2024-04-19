import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Skill } from "../../../components/skill/Skill";
import { SkillsData } from "../../../data/Data";
import { S } from "./Skills.styles";
import React from "react";
import { FilterMenu } from "../../../components/menu/FilterMenu";



export const Skills: React.FC = () => {
  return (
    <S.Skills id={'skills'}>
      <SectionTitle title="Skills" />
      <S.SkillsMenu>
        <FilterMenu />
      </S.SkillsMenu>
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="center"
        content="center"
        gapItem="20px"
      >
        {SkillsData.map((item, index) => {
          return <Skill key={index} iconId={item.iconId} title={item.title} />;
        })}
      </FlexWrapper>
    </S.Skills>
  );
};
