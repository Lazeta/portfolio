import styled from "styled-components";
import { myTheme } from "../../../components/global/MyTheme.styled";
import { HoverBox } from "../../../components/hovers/HoverBox.styled";
import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton />

      <MobileMenuPopup>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href="">
                  <span>{item}</span>
                </Link>
              </ListItem>
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
  @media ${myTheme.media.desktop} {
    display: none;
  }
`;

const MobileMenuPopup = styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(31, 38, 38, 0.98);
  transition: all 2s ease-in-out 1s;
  display: grid;
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
  `;

const ListItem = styled.li`
  position: relative;
  display: flex;
  padding: 5px 15px;
  border: 1px solid ${myTheme.colors.secondary};
  color: ${myTheme.colors.secondary};
  text-decoration: column;
  white-space: nowrap;
  font-size: 1.5rem;

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
