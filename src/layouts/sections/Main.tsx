import styled from "styled-components";
import { HeroSection } from "./herosection/HeroSection.styled";

export const Main = () => {
    return (
        <StyledMain>
            <HeroSection/>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    margin: 0 auto;
    width: 50vw;
    min-height: 617px;
    border: 2px solid red;
    padding: 0 20px;
`;