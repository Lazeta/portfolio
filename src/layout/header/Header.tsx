import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const headerItems = ["Home", "About me", "Projects", "Skills", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={headerItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;