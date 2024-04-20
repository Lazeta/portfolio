import React from "react";
import { S } from "../../components/menu/headerMenu/HeaderMenu.styles";
import { DesktopMenu } from "./desktopMenu/DesktopMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header id={"home"}>
      {width < breakpoint ? (
        <MobileMenu isOpen={false} />
      ) : (
        <S.DesktopContainer>
          <DesktopMenu />
        </S.DesktopContainer>
      )}
    </S.Header>
  );
};
