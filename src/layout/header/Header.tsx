import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const headerItems = ["Home", "About me", "Projects", "Skills", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderMenu menuItems={headerItems} />
      <MobileMenu menuItems={headerItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  right: -30px;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  min-height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
