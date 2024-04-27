import { myTheme } from "../../styles/global/MyTheme.styled";
import styled from "styled-components";
import { Button } from '@mui/material';
import { motion } from "framer-motion";


const Projects = styled.section`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  
  @media ${myTheme.media.mobile} {
    justify-content: center;
  }
  `;

const Sort = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  `;

const Project = styled(motion.div)`
  background-color: ${myTheme.colors.lightFont};
  border: 1px solid black;
  width: 43%;
  max-width: 650px;
  flex-grow: 1;
  

  
  @media ${myTheme.media.mobile} {
    width: 100%;
    max-width: 100%;
    gap: 0;
    flex-grow: 1;
  }
  
  a {
    position: relative;
    opacity: 1;
    transition: ${myTheme.animations.default};
  }
  a:hover {
    opacity: 0.6;
      transition: ${myTheme.animations.default};
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity .3s, filter .3s;
`

const ImageWrapper = styled.a`
  position: relative;

  ${StyledButton} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);

  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 450px;
  object-fit: cover;
  
    
  /* + ${StyledButton} {
    opacity: 1;
    filter: blur(0);
  } */
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
  padding: 0 15px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DescriptionLinks = styled.div``


const Paragraph = styled.p`
  color: ${myTheme.colors.secondary};
`;


const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  gap: 20px;
  width: 100%;
  `

// const StyledFade = styled(Fade)`
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
// `
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
  StyledButton,
  ImageWrapper,
  // StyledFade,
  ProjectContainer,
}