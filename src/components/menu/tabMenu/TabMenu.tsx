import TabButton from "../../buttons/TabButton";
import S from "./TabMenu.styles";


export type TabsStatusType = "all" | "landing" | "react" | "spa" | "js" | "ts";

type TabMenuPropsType = {
  tabsItems: Array<{ status: TabsStatusType; title: string }>;
  changeFilterStatus: (value: TabsStatusType) => void;
  currentFilterStatus: string;
};

export const TabMenu = (props: TabMenuPropsType) => {
  const {tabsItems, currentFilterStatus, changeFilterStatus} = props

  return (
    <S.TabMenuList>
      {tabsItems.map((item, index) => (
        <TabButton key={index}
          isActive={item.status === currentFilterStatus}
          onClick={() => {changeFilterStatus(item.status)} }
          title={item.title}
          >
          {item.title}
        </TabButton>
      ))}
    </S.TabMenuList>
  );
};