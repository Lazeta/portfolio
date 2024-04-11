import styled, { css } from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

type StyledLinkPropsType = {
  height?: string;
  width?: string;
  font?: string;
  color?: string;
  active?: boolean;
};

// Menu

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
    flex-wrap: wrap;

    li {
      position: relative;
      display: inline-block;
      padding: 5px 15px;
      border: 1px solid ${myTheme.colors.secondary};
      color: ${myTheme.colors.secondary};
      text-decoration: none;
      white-space: nowrap;
      a {
        font-size: 1rem;
        color: ${myTheme.colors.secondary};
        text-decoration: none;
      }
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
    }
  }
`;

const Link = styled.a<StyledLinkPropsType>`
  background-color: ${myTheme.colors.primary};
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in-out;

  ${(props) => props.active && css`
    text-decoration: line;
    
    &:hover{
      opacity: 0.8;
    }
  `}
`;


// Header

const Header = styled.header`
  position: relative;
  right: 0;
  max-width: 1550px;
  width: 100%;
  margin: 0;
  min-height: 100px;

  @media ${myTheme.media.mobile} {
    min-height: 0;
  }
`;


// Desktop Menu

const DesktopMenu = styled.nav`
 ul {
   display: flex;
   justify-content: flex-end;
   gap: 30px;
   list-style-type: none;
   }
`;


// Mobile Menu

const MobileMenu = styled.nav`
  margin: 0 auto;
`;

const BurgerButton = styled.div<{isOpen: boolean}>`
  display: flex;
  position: fixed;
  top: 30px;
  right: 30px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 100;

  .bars {
    position: relative;
    width: 40px;
    height: 2px;
    background-color: ${myTheme.colors.secondary};
    transition: all 0.3s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${myTheme.colors.secondary};
      transition: all 0.3s ease-in-out;
    }

    &::before {
      top: -12px;
    }

    &::after {
      bottom: -12px;
    }
  }

  .bars.open {
    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(45deg);
    }

    &::after {
      bottom: 0;
      transform: rotate(-45deg);
    }
  }
`;

const HoverBox = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;


// Mobile Menu Popup

type MobileMenuPopupProps = {
  isOpen: boolean;
  menuItems: Array<string>;
};

const MobileMenuPopup = styled.div<MobileMenuPopupProps>`
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  position: fixed;
  width: 100vw;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${(props) => (props.isOpen ? "99" : "99")};
  background-color: rgba(31, 38, 38, 0.98);
  animation: ${(props) => (props.isOpen ? "animate-in" : "animate-out")} 1s
    ease-in-out forwards;
  max-height: ${(props) => (props.isOpen ? "100%" : "-100%")};
  overflow: hidden;

  @keyframes animate-in {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes animate-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 20%;
  }
`;


export const S = {
  Menu,
  Link,
  Header,
  HoverBox,
  MobileMenu,
  DesktopMenu,
  BurgerButton,
  MobileMenuPopup,
} 