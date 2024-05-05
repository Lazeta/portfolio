import TabButton from "../../buttons/TabButton";
import S from "./TabMenu.styles";


export type TabsStatusTypeSkills = "all" | "languages" | "bundlers" | "development_environment" | "framework" | "styles" | "methodology" | "libraries";

type FilterMenuSkillsPropsType = {
  tabsItems: Array<{ status: TabsStatusTypeSkills; title: string; }>;
  currentFilterStatus: string;
  changeFilterStatus: (value: TabsStatusTypeSkills) => void;
}

export const FilterMenu = (props: FilterMenuSkillsPropsType) => {
  const {tabsItems, currentFilterStatus, changeFilterStatus} = props;

  return (
    <S.TabMenuList>
      {tabsItems.map((item, index) => (
        <TabButton key={index}
          isActive={item.status === currentFilterStatus}
          onClick={() => {changeFilterStatus(item.status)}}
          title={item.title}
        >
          {item.title}
        </TabButton>
      ))}
    </S.TabMenuList>
  )
};