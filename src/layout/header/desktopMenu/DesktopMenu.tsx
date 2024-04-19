// import React from "react";
import { S } from "../../../components/menu/headerMenu/HeaderMenu.styles";
import { Menu } from "../../../components/menu/Menu";

// type DesktopMenuPopupProps = {
//    menuItems: Array<string>
// };

export const DesktopMenu = () => {
  // const { menuItems } = props;
  return (
    <S.DesktopMenu>
      <Menu/>
    </S.DesktopMenu>
  );
};
