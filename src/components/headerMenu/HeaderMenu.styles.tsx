import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";


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


const DesktopMenu = styled.nav`
 ul {
   display: flex;
   justify-content: flex-end;
   gap: 30px;
   list-style-type: none;
   }
`;


const MobileMenu = styled.nav`
  margin: 0 auto;
`;


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


const Link = styled.a`
  background-color: ${myTheme.colors.primary};
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  text-align: center;
`;


export const S = {
    Header,
    Menu,
    DesktopMenu,
    MobileMenu,
    Link,
} 