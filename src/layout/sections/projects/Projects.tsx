import React, { useState } from "react";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Project } from "../../../components/project/Project";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { S } from "../../../components/project/Project.styles";
import { tabsItems, ObjectProjects } from "../../../components/data/Data";
import {
  TabMenu,
  TabsStatusType,
} from "../../../components/menu/tabMenu/TabMenu";

export const Projects: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filteredProjects = ObjectProjects;

  if (currentFilterStatus === "landing") {
    filteredProjects = ObjectProjects.filter((project) => 
      project.type.includes("landing")
    );
  }
  if (currentFilterStatus === "react") {
    filteredProjects = ObjectProjects.filter((project) => 
      project.type.includes("react")
    );
  }
  if (currentFilterStatus === "spa") {
    filteredProjects = ObjectProjects.filter((project) => 
      project.type.includes("spa")
    );
  }
  if (currentFilterStatus === "js") {
    filteredProjects = ObjectProjects.filter((project) => 
      project.type.includes("js")
    );
  }
  if (currentFilterStatus === "ts") {
    filteredProjects = ObjectProjects.filter((project) => 
      project.type.includes("ts")
    )
  } 

  const changeFilterStatus = (value: TabsStatusType) => {
    setCurrentFilterStatus(value);
  };

  return (
    <S.Projects>
      <SectionTitle title={"Projects"} />
      <S.Sort>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
      </S.Sort>
      <FlexWrapper
        direction="row"
        justify="space-between"
        wrap="wrap"
        content="center"
        gapItem="20px"
      >
        {filteredProjects.map((project) => (
          <Project
            key={project.title}
            href={project.href}
            title={project.title}
            src={project.src}
            skills={project.skills}
            text={project.text}
          />
        ))}
      </FlexWrapper>
    </S.Projects>
  );
};
