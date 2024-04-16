import { myTheme } from "../global/MyTheme.styled";
import styled from "styled-components";


const Projects = styled.section`
  max-width: 100%;
  max-height: 100%;
  padding: 20px 0;
`;

const Sort = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


const Project = styled.div`
  max-width: 100%;
  width: 48%;
  background-color: ${myTheme.colors.lightFont};
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${myTheme.media.mobileSlide} {
    width: 100%;
  }
`;

const UseTechnologys = styled.ul`
  display: block;
  button {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  justify-content: left;
  gap: 10px;
  }
`;

const ProjectDescription = styled.div`
  display: flex;
  gap: 5px;
  padding: 0 15px;
  flex-wrap: wrap;
  span {
    color: ${myTheme.colors.secondary};
  }
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;


const Paragraph = styled.p`
  color: ${myTheme.colors.secondary};
`


export const S = {
  Projects,
  Sort,
  Project,
  UseTechnologys,
  ProjectDescription,
  Image,
  Paragraph,
}