import styled from "styled-components";
import myTheme from "../../../styles/global/MyTheme.styled";


const TabMenuList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media ${myTheme.media.mobile} {
        padding-left: 0;
    }
`

const S = {
    TabMenuList,
}


export default S