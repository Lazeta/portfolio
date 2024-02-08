import styled from "styled-components";
import { myTheme } from "../../../components/global/MyTheme.styled";


export const HeroSection = () => {
    return (
        <StyledHeroSection/>

        <img src="assets/images/library_project-min.png" alt="#"/>
    )
} 

const StyledHeroSection = styled.div`
    width: auto;
    min-height: 250px;
    border: 2px solid green;
    display: flex;
`