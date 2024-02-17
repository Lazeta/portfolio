import styled from "styled-components";
import {
    StyledImage,
    StyledProject,
    StyledProjectDescription,
    UseTechnologys,
  } from "./Project.styled";
  import { Link } from "../link/Link";
  import { FlexWrapper } from "../menu/FlexWrapper";
  import { SectionTitle, StyledSectionTitle } from "../sectiontitle/SectionTitle";
  
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
            <SectionTitle title={"Projects"}></SectionTitle>
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