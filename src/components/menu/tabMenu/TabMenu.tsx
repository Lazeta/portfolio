import TabButton from "../../buttons/TabButton";
import S from "./TabMenu.styles";


export type TabsStatusTypeProject = "all" | "landing" | "react" | "spa" | "js" | "ts";
// export type TabsStatusTypeSkills = "all" | "languages" | "bundlers" | "development_environment" | "framework" | "styles" | "methodology" | "libraries";

type TabMenuPropsType = {
  tabsItems: Array<{ status: TabsStatusTypeProject; title: string }>;
  currentFilterStatus: string;
  changeFilterStatus: (value: TabsStatusTypeProject) => void;
};

// type TabMenuPropsType = {
//   tabsItems: Array<{ status: TabsStatusTypeProject | TabsStatusTypeSkills; title: string }>;
//   changeFilterStatus: (value: TabsStatusTypeProject | TabsStatusTypeSkills) => void;
//   currentFilterStatus: string;
// };

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