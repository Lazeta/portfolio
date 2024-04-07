import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { Project } from "../../../components/project/Project";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { S } from "../../../components/project/Project.styles";
import { SortItems, ObjectProjects } from "../../../components/data/Data";
import React from "react";


export const Projects: React.FC = () => {
  return (
    <S.Projects>
      <SectionTitle title="Projects" />
      <S.Sort>
        <Menu menuItems={SortItems} />
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

      {/* <Button title={"See All Projects"}/> */}
    </S.Projects>
  );
};