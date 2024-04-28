import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { tabsItems, ObjectProjects } from "../../../data/Data";
import { TabMenu, TabsStatusType } from "../../../components/menu/tabMenu/TabMenu";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import MarginCenter from "../../../components/wrapper/MarginCenter";
import FlexWrapper from "../../../components/wrapper/FlexWrapper";
import Project from "../../../components/project/Project";
import S from "../../../components/project/Project.styles";


const Projects: React.FC = () => {
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
      <MarginCenter>
        <SectionTitle title={"Projects"}/>
      </MarginCenter>
      <S.Sort>
        <TabMenu tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
      </S.Sort>
      <FlexWrapper direction="row" wrap="wrap" justify="speca-between" content="center" gapItem="20px">
        <AnimatePresence>
          {filteredProjects.map((project) => 
            (
              <Project key={project.id}
              href={project.href}
              title={project.title}
              src={project.src}
              skills={project.skills}
              text={project.text}
              />
            )
          )}
        </AnimatePresence>
      </FlexWrapper>
    </S.Projects>
  );
};


export default Projects