import styled from "styled-components";

export const Header = () => {
    return (
        <StyledHeader>
            <a href="">
                <img src="" alt="not find way to img" />
            </a>

            <Nav></Nav>
        </StyledHeader>
    )
}




const StyledHeader = styled.div`
    margin: 0 auto;
    width: 50vw;
    min-height: 100px;
    border: 2px solid red;
    padding: 0 20px;
`