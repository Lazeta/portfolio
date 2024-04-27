import {
  TabMenu,
  TabsStatusType,
} from "../../../components/menu/tabMenu/TabMenu";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { tabsItems, ObjectProjects } from "../../../data/Data";
import { S } from "../../../components/project/Project.styles";
import { Project } from "../../../components/project/Project";
import { Fade } from "react-awesome-reveal";
import React, { useState } from "react";

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
    );
  }

  const changeFilterStatus = (value: TabsStatusType) => {
    setCurrentFilterStatus(value);
  };

  return (
    <S.Projects id={"projects"}>
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
        wrap="wrap"
        justify="center"
        content="center"
        gapItem="20px"
      >
        {/* <Fade> */}
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
        {/* </Fade> */}
      </FlexWrapper>
    </S.Projects>
  );
};
