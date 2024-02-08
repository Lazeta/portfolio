import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    )
}




const StyledHeader = styled.div`
    margin: 0 auto;
    width: 50vw;
    min-height: 100px;
    border: 2px solid red;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`