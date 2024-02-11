import {
  StyledImage,
  StyledProject,
  StyledProjectDescription,
  UseTechnologys,
} from "./project.styled";
import { Link } from "../link/Link";
import { FlexWrapper } from "../menu/FlexWrapper";
import styled from "styled-components";
import { StyledSectionTitle } from "../sectionTitle/SectionTitle";

type ProjectPropsType = {
  src: string
  title: string
  skill?: string
  text?: string

}

const links = [
  { href: "/demo", title: "demo" },
  { href: "/github.io", title: "code" },
];

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <StyledImage src={props.src} alt="bad way"/>
      <StyledProjectDescription>
        <FlexWrapper justify="space-between" wrap="wrap" align="center" gapItem="20px">
          <Title>{props.title}</Title>
          <ul>
            {links.map((link) => (
              <Link key={link.href} href={link.href} title={link.title} />
            ))}
          </ul>
        </FlexWrapper>
        <UseTechnologys>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
          <span>WEBPACK</span>
          <span>TYPESCRIPT</span>
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
}

const Title = styled(StyledSectionTitle)`
    /* color: black; */
`