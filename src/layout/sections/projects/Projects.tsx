import React from "react";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Project } from "../../../components/project/Project";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { S } from "../../../components/project/Project.styles";
import { tabsItems, ObjectProjects } from "../../../components/data/Data";
import { TabMenu } from "../../../components/menu/tabMenu/tabMenu";


export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <SectionTitle title="Projects" />
      <S.Sort>
        <TabMenu tabsItems={tabsItems}/>
      </S.Sort>
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="space-between"
        content="center"
        gapItem="20px"
      >
        {ObjectProjects.map((item, index) => (
          <Project key={index} src={item.src} title={item.title}
          />
        ))}
      </FlexWrapper>
    </S.Projects>
  );
};