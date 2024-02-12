import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";


const headerItems = ["Home", "About me", "Projects", "Skills", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={headerItems}/>
        </StyledHeader>
    )
}




const StyledHeader = styled.header`
    margin: 0 auto;
    width: 50vw;
    min-height: 100px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`