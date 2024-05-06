import TabButton from "../../buttons/TabButton";
import S from "./TabMenu.styles";


export type TabsStatusTypeProject = "all" | "landing" | "react" | "spa" | "js" | "ts" | "game";


type TabMenuPropsType = {
  tabsItems: Array<{ status: TabsStatusTypeProject; title: string }>;
  currentFilterStatus: string;
  changeFilterStatus: (value: TabsStatusTypeProject) => void;
};

export const TabMenu = (props: TabMenuPropsType) => {
  const {tabsItems, currentFilterStatus, changeFilterStatus} = props;

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