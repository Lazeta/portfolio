import React from "react";
import { ListItem } from "../../../components/listItem/ListItem";
import { S } from "../../../components/headerMenu/HeaderMenu.styles";

type DesktopMenuPopupProps = {
  menuItems: Array<string>;
};

export const DesktopMenu: React.FC<DesktopMenuPopupProps> = ({menuItems }) => {
  return (
    <S.DesktopMenu>
      <ListItem menuItems={menuItems}/>
    </S.DesktopMenu>
  );
};
