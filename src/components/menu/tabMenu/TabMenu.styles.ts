import styled from "styled-components";
import { myTheme } from "../../global/MyTheme.styled";

const TabMenuList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media ${myTheme.media.mobile} {
        padding-left: 0;
    }
`

export const S = {
    TabMenuList,
} 