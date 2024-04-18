import styled from "styled-components";
import '../css/font.css';
import { myTheme } from "../../styles/global/MyTheme.styled";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    content?: string
    gapItem?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "flex-start"};
    align-items: ${(props) => props.align || "stretch"};
    flex-wrap: ${(props) => props.wrap || "nowrap"};
    align-content: ${(props) => props.content || "stretch"};
    gap: ${(props) => props.gapItem || "0"};

    @media ${myTheme.media.mobile} {
        flex-direction: ${(props) => props.direction || "column"};
        gap: ${(props) => (props.gapItem || "0px")};
    }
`