import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";
import project1 from "../../assets/images/library_project-min.webp";
import { FlexWrapper } from "../menu/FlexWrapper";
import { StyledImage, StyledProject, StyledProjectDescription, UseTechnologys } from "./project.styled";

export const Project = () => {
  return (
    <StyledProject>
      <StyledImage src={project1} alt="library" />
      <StyledProjectDescription>
        <h3>Title Project</h3>
        <UseTechnologys>
          <Link>JAVASCRIPT</Link>
          <Link>REACT</Link>
          <Link>WEBPACK</Link>
          <Link>TYPESCRIPT</Link>
        </UseTechnologys>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          sequi deserunt quibusdam amet, harum repellendus laborum ea minima
          quidem neque, quaerat voluptatem eum. Placeat laudantium sapiente illo
          velit, officia perspiciatis.
        </p>
      </StyledProjectDescription>
    </StyledProject>
  );
};

const Link = styled.button`
  
`