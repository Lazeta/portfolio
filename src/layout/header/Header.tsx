import styled from "styled-components";
import { BurgerButton } from "../../components/menu/burger/BurgerButton";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const headerItems = ["Home", "About me", "Projects", "Skills", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <BurgerButton />
      {/* <Logo /> */}
      <HeaderMenu menuItems={headerItems} />
      {/* <TabletMenu menuItems={headerItems} /> */}
      <MobileMenu menuItems={headerItems} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  right: 0;
  max-width: 1550px;
  width: 100%;
  margin: 0;
  min-height: 100px;
`;
