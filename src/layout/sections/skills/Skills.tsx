import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { SkillsData, tabsFilterSkills } from "../../../data/Data";
import { FilterMenu, TabsStatusTypeSkills } from "../../../components/menu/FilterMenu";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import FlexWrapper from "../../../components/wrapper/FlexWrapper";
import Skill from "../../../components/skill/Skill";
import S from "./Skills.styles";

const Skills: React.FC = () => {
  // tabs menu filter skills
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all');
  let filteredSkills = SkillsData;

  if (currentFilterStatus === 'languages') {
    filteredSkills = SkillsData.filter((skill) => 
      skill.type.includes('languages')
    )
  }
  if (currentFilterStatus === 'bundlers') {
    filteredSkills = SkillsData.filter((skill) => 
      skill.type.includes('bundlers')
    )
  }
  if (currentFilterStatus === 'development_environment') {
    filteredSkills = SkillsData.filter((skill) => 
      skill.type.includes('development_environment')
    )
  }
  if (currentFilterStatus === 'framework') {
    filteredSkills = SkillsData.filter((skill) => 
      skill.type.includes('framework')
    )
  }
  if (currentFilterStatus === 'styles') {
    filteredSkills = SkillsData.filter((skill) => 
      skill.type.includes('styles')
    )
  }
  if (currentFilterStatus === 'methodology') {
    filteredSkills = SkillsData.filter((skill) => 
      skill.type.includes('methodology')
    )
  }
  if (currentFilterStatus === 'libraries') {
    filteredSkills = SkillsData.filter((skill) => 
      skill.type.includes('libraries')
    )
  }
  const changeFilterStatus = (value: TabsStatusTypeSkills) => {
    setCurrentFilterStatus(value);
  }

  return (
    <S.Skills id={"skills"}>
      <SectionTitle title="Skills" />
      <S.Sort>
        <FilterMenu tabsItems={tabsFilterSkills}
        currentFilterStatus={currentFilterStatus} 
        changeFilterStatus={changeFilterStatus} 
        />
      </S.Sort>
      <FlexWrapper direction="row" wrap="wrap" justify="center" content="center" gapItem="20px">
        <Fade cascade damping={0.3} triggerOnce>
          {filteredSkills.map((skill) => (
            <Skill key={skill.id} 
            iconId={skill.iconId} 
            title={skill.title} />
          ))}
        </Fade>
      </FlexWrapper>
    </S.Skills>
  );
};


export default Skills