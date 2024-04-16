import { myTheme } from "../global/MyTheme.styled";
import styled from "styled-components";
// import { SectionTitle } from "../sectiontitle/SectionTitle";


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
  padding: 0 10px;
  display: flex;
  list-style-type: none;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  
  @media screen and (max-width: 379px) {
    padding: 0px;
  }
`;

const UseTechnologysItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0 15px;
  flex-wrap: wrap;
`;

const DescriptionLinks = styled.div`

`

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;


const Paragraph = styled.p`
  color: ${myTheme.colors.secondary};
`;


export const S = {
  UseTechnologysItem,
  ProjectDescription,
  DescriptionLinks,
  UseTechnologys,
  Paragraph,
  Projects,
  Project,
  Image,
  Sort,
}