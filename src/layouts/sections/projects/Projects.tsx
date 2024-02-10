import styled from "styled-components";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Project } from "../../../components/project/project";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle title="Projects"/>
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

const StyledProjects = styled.div`
    max-width: 100%;
    max-height: 100%;
    padding: 20px 0;
`