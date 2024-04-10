import React from "react";
import { TabButton } from "../../buttons/TabButton";
import { Link } from "../../link/Link";
import { S } from "./TabMenu.styles";

export type TabsStatusType = "all" | "landing" | "react" | "spa" | "js";

type TabMenuPropsType = {
  tabsItems: Array<{ status: TabsStatusType; title: string }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: string;
};

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
  return (    
    <S.TabMenuList>
      {props.tabsItems.map((item, index) => {
        return ( <div>
          <TabButton key={index}
              isActive={item.status === props.currentFilterStatus}
              onClick={() => {props.changeFilterStatus(item.status);}} 
              title={item.title} />
        </div>
        );
      })}
    </S.TabMenuList>
  );
};
