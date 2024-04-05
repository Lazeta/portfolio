import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BurgerButton } from "../../../components/menu/burger/BurgerButton";
import { Link } from "../../../components/link/Link";
import { ListItem } from "../../../components/listItem/ListItem";
import { S } from "../../../components/headerMenu/HeaderMenu.styles";

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
    <S.MobileMenu>
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
              <ListItem index={index}>
                <Link href="/url">
                  <span>{item}</span>
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </S.MobileMenu>
  );
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
