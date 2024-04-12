// import React from "react";
import { ListItem } from "../../../components/listItem/ListItem";
import { S } from "../../../components/headerMenu/HeaderMenu.styles";
// import { TabsStatusType } from "../../../components/menu/tabMenu/TabMenu";

type DesktopMenuPopupProps = {
  menuItems: Array<string>
  // changeFilterStatus: (value: TabsStatusType) => void;
  // currentFilterStatus: string;
};

export const DesktopMenu = (props: DesktopMenuPopupProps) => {
  return (
    <S.DesktopMenu>
      <ListItem menuItems={props.menuItems}/>
    </S.DesktopMenu>
  );
};
