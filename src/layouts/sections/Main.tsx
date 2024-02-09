import styled from "styled-components";
import { AboutMe } from "./aboutme/AboutMe.styled";
import { HeroSection } from "./herosection/HeroSection.styled";

export const Main = () => {
    return (
        <StyledMain>
            <HeroSection/>
            <AboutMe/>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    margin: 0 auto;
    width: 50vw;
    min-height: 617px;
    border: 4px solid black;
    padding: 0 20px;
`;