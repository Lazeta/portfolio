import React from "react";
import { TabButton } from "../../buttons/TabButton";
import { S } from "./TabMenu.styles";

export type TabsStatusType = "all" | "landing" | "react" | "spa" | 'js'

type TabMenuPropsType = {
  tabsItems: Array<{
    status: TabsStatusType, title: string;
  }>
  changeFilterStatus: (value: TabsStatusType) => void
};

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
  return (
    <S.TabMenuList>
      {props.tabsItems.map((item, index) => {
        return (
          <TabButton key={index}
            onClick={() => {
              props.changeFilterStatus(item.status);
            }}
            title={item.title}
          >
            {item.title}
          </TabButton>
          
        );
      })}
    </S.TabMenuList>
  );
};
