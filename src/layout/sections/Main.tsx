import styled from "styled-components";
import { HeroSection } from "./herosection/HeroSection";
import { AboutMe } from "./aboutme/AboutMe";
import { Projects } from "./projects/Projects";
import { Skills } from "./skills/Skills";
import { Contacts } from "./contacts/Contacts";

export const Main = () => {
    return (
        <StyledMain>
            <HeroSection/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
        </StyledMain>
    )
}

const StyledMain = styled.main`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;