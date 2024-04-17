import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { Skill } from "../../../components/skill/Skill";
import { S } from "./Skills.styles";
import { SkillsFilter, SkillsData } from "../../../components/data/Data";
import React from "react";


export const Skills: React.FC = () => {
  return (
    <S.Skills>
      <SectionTitle title="Skills" />
      <S.SkillsMenu>
        <Menu menuItems={SkillsFilter} />
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
