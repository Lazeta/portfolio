import styled from "styled-components";
import { FlexWrapper } from "../../../components/menu/FlexWrapper";
import { Project } from "../../../components/project/project";

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper direction="row" wrap="wrap" justify="space-between" content="space-between" gapItem="20px">
        <Project />
        <Project />
        <Project />
        <Project />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
