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

const StyledMain = styled.div`
    margin: 0 auto;
    width: 50vw;
    min-height: 617px;
    /* border: 4px solid black; */
    padding: 0 20px;
`;