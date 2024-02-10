import styled from "styled-components";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";
import { Project } from "../../../components/project/project";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";


const projectItems = ["All", "Landing page", "React", "SPA"]

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle title="Projects"/>
      <StyledSort>
        <Menu menuItems={projectItems} />
      </StyledSort>
      <FlexWrapper direction="row" wrap="wrap" justify="space-between" content="space-between" gapItem="20px">
        <Project />
        <Project />
        <Project />
        <Project />
      </FlexWrapper>

      <button>See All Projects</button>
    </StyledProjects>

  );
};

const StyledProjects = styled.section`
    max-width: 100%;
    max-height: 100%;
    padding: 20px 0;
`

const StyledSort = styled.div`
  
`