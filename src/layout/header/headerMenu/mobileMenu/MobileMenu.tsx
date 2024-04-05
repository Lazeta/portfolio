import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { myTheme } from "../../../../components/global/MyTheme.styled";
import { Link } from "../../../../components/link/Link";
// import { Burger } from "../../../../components/menu/burger/Burger";
import { BurgerButton } from "../../../../components/menu/burger/BurgerButton";

type MobileMenuPopupProps = {
  isOpen: boolean;
  menuItems: Array<string>;
};

export const MobileMenu: React.FC<MobileMenuPopupProps> = ({
  isOpen,
  menuItems,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleEscKey = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <StyledMobileMenu>
      {/* <Burger onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <Line></Line>
      </Burger> этот вариант до того как был разбит на отдельный компонент */}
      {/* <Burger  onClick={toggleMenu} isMenuOpen={isMenuOpen}/> после того как сделали компонент */}

      <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <MobileMenuPopup
        menuItems={menuItems}
        isOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <ul>
          {menuItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link href="/another-url">
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

  @media ${myTheme.media.desktop} {
    display: none;
  }
  @media ${myTheme.media.mobile} {
    display: flex;
  }
`;

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
