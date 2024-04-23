import React from "react";
import { S } from "../../components/menu/headerMenu/HeaderMenu.styles";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import styled from "styled-components";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      {width < breakpoint ? (
        <MobileMenu isOpen={false} />
      ) : (
        <Overlay>
          <DesktopMenu />
        </Overlay>
      )}
    </S.Header>
  );
};


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7%;
  background-color: rgba(9, 10, 19, 0.6);
  z-index: 6;
`;