import React, { useState } from "react";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Project } from "../../../components/project/Project";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { S } from "../../../components/project/Project.styles";
import { tabsItems, ObjectProjects } from "../../../components/data/Data";
import { TabMenu, TabsStatusType } from "../../../components/menu/tabMenu/TabMenu";

export const Projects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
  let filteredWorks = ObjectProjects

  if (currentFilterStatus === "landing") {
    filteredWorks = ObjectProjects.filter(work => work.type === "landing")
  }
  if (currentFilterStatus === "react") {
    filteredWorks = ObjectProjects.filter(work => work.type === "react")
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = ObjectProjects.filter(work => work.type === "spa")
  }
  if (currentFilterStatus === "js") {
    filteredWorks = ObjectProjects.filter(work => work.type === "js")
  }

  const changeFilterStatus = (value: TabsStatusType) => {
    setCurrentFilterStatus(value)
  }

  return (
    <S.Projects>
      <SectionTitle title="Projects" />
      <S.Sort>
        <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
      </S.Sort>
      <FlexWrapper
        direction="row"
        wrap="wrap"
        justify="space-between"
        content="center"
        gapItem="20px"
      >
        {filteredWorks.map((w) => (
          <Project title={w.title} src={w.src}/>
        ))}
      </FlexWrapper>
    </S.Projects>
  );
};