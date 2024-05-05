import { motion } from "framer-motion";
import styled from "styled-components";
import myTheme from "../../styles/global/MyTheme.styled";


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

const StyledButton = styled.span`
//   position: absolute;
//   max-width: 200px;
//   width: 100%;
//   height: 50px;
//   top: -50%;
//   left: 50%;
//   transform: translate(-50%, -500%);
//   transition: all .3s ease, filter 0.3s;
//   opacity: 0;
//   border: 2px solid red;
//   z-index: 100;

//   &:active {
//     animation: clickAnimation 0.2s ease-in-out;
//   }

//   @keyframes clickAnimation {
//     0% {
//       transform: translate(-50%, -50%) scale(1);
//     }
//     50% {
//       transform: translate(-50%, -50%) scale(0.9);
//     }
//     100% {
//       transform: translate(-50%, -50%) scale(1);
//     }
//   }
`;

const ImageWrapper = styled.a`
  position: relative;

  &:hover ${StyledButton} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 450px;
  object-fit: cover;
`;

const UseTechnologys = styled.ul`
  padding: 0 10px;
  display: flex;
  list-style-type: none;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  button { 
    cursor: initial;
  }

  @media ${myTheme.media.mobile} {
    justify-content: center;
  }
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

const S = {
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
  ProjectContainer,
}


export default S