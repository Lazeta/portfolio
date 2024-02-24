import styled from "styled-components";
import { myTheme } from "../../../components/global/MyTheme.styled";
import { HoverBox } from "../../../components/hovers/HoverBox.styled";
import { BurgerButton } from "../../../components/menu/burger/BurgerButton";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton />

      <MobileMenuPopup>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <HoverBox>
                <ListItem key={index}>
                  <Link href="">
                    <span>{item}</span>
                  </Link>
                </ListItem>
              </HoverBox>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  margin: 0 auto;
  position: relative;
  display: flex;
`

const MobileMenuPopup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  /* background-color: ${myTheme.colors.lightPrimary} */
  background-color: ${myTheme.colors.any};

  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const ListItem = styled.li`
  position: relative;
  display: none;
  padding: 5px 15px;
  border: 1px solid ${myTheme.colors.secondary};
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  white-space: nowrap;
  font-size: 0.9rem;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background-color: ${myTheme.colors.lightFont};
    transition: 0.3s ease-in-out;
    transform: scaleY(1);
  }

  &:hover::before {
    transform: scaleY(0);
  }

  &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background-color: ${myTheme.colors.lightFont};
    transition: 0.3s ease-in-out;
    transform: scaleX(1);
    transition-delay: 0.5s;
  }

  &:hover::after {
    transform: scaleX(0);
  }

  span {
    position: relative;
    z-index: 3;
  }
`;

const Link = styled.a`
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  text-align: center;
`;
