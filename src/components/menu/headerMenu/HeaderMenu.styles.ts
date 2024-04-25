import { myTheme } from "../../../styles/global/MyTheme.styled";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";

type StyledLinkPropsType = {
  height?: string;
  width?: string;
  font?: string;
  color?: string;
  active?: boolean;
  isClosing?: boolean;
  isOpen?: boolean;
};

// NavLink
const NavLink = styled.a<StyledLinkPropsType>`
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
    
    &:hover {
      opacity: 0.8;
    }
  `}
  ${(props) => props.className && css`
    text-decoration: underline;
  `}
`;

// Header
const Header = styled.header`
  position: relative;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 5px 10px;
  z-index: 3;

  @media ${myTheme.media.mobile} {
    padding: 0;
    z-index: 101;
  }
`;

// Desktop Menu
const DesktopContainer = styled.div`
  position: relative;
  width: 100vw;
  z-index: 5;
  background: #0b8b9c;
  `

const DesktopMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  max-width: 1300px;
  z-index: 3;
  
  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
  }
`;

// Mobile Menu
const MobileMenu = styled.nav`
  margin: 0 auto;
`;

const BurgerButton = styled.div<StyledLinkPropsType>`
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
    background-color: ${props => props.isOpen ? "transparent" : props.theme.colors.secondary};
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
      top: ${props => props.isOpen ? "0px" : "-12px"};
      transform: ${props => props.isOpen ? "rotate(45deg)" : "rotate(0deg)"};
    }

    &::after {
      bottom: ${props => props.isOpen ? "0px" : "-12px"};
      transform: ${props => props.isOpen ? "rotate(-45deg)" : "rotate(0deg)"};
    }
  }
`;

const HoverBox = styled.button`
  background-color: transparent;
  border: 1px none;
  padding: 0;
`;


// Mobile Menu Popup
const MobileMenuPopup = styled.div<StyledLinkPropsType>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: 99;

  display: ${props => props.isClosing ? "none" : "block" };
  background-color: rgba(31, 38, 38, 0.90);
  animation: ${props => props.isClosing ? 'disappear' : 'appear'} 1s forwards;

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translate(-50%, -150%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -150%);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 20%;

    li > {
      border: 1px solid #bdebea;
      padding: 5px;
    }
  }
`;


// Menu
const Menu = styled.nav`
  position: initial;
  width: 100%;

  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
    flex-wrap: wrap;
    padding: 0 40px;

    @media ${myTheme.media.mobile} {
      gap: 5rem;
    }

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

      &:active::before {
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

      &:active::after {
        transform: scaleX(0);
      }

      span {
        position: relative;
        z-index: 101;
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

const ItemLink = styled(Link)`
  cursor: pointer;
  transition: color 0.3s ease;

  ${props => props.activeClass && css`
    &.active {
      color: ${myTheme.colors.flashColor};
      transition: color 0.4s ease;
    }
    &:hover {

    }
  `}

  span {
    padding-top: 17px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
  }
`


export const S = {
  Menu,
  Header,
  NavLink,
  ItemLink,
  HoverBox,
  MobileMenu,
  DesktopMenu,
  BurgerButton,
  MobileMenuPopup,
  DesktopContainer,
} 