// import React from "react";
import { ListItem } from "../../../components/listItem/ListItem";
import { S } from "../../../components/menu/headerMenu/HeaderMenu.styles";

type DesktopMenuPopupProps = {
  menuItems: Array<string>
};

export const DesktopMenu = (props: DesktopMenuPopupProps) => {
  return (
    <S.DesktopMenu>
      <ListItem menuItems={props.menuItems}/>
    </S.DesktopMenu>
  );
};
