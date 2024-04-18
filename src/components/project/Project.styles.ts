import { myTheme } from "../../styles/global/MyTheme.styled";
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
  gap: 20px;

  @media ${myTheme.media.mobile} {
    width: 100%;
    gap: 0px;
  }
`;

const UseTechnologys = styled.ul`
  padding: 0 10px;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  
  @media screen and (max-width: 379px) {
    padding: 0px;
    
    button {
      width: 7.3rem;
    }
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

const DescriptionLinks = styled.div``

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