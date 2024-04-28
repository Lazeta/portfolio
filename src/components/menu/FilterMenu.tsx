import { SkillsFilter } from "../../data/Data";
import S from "./headerMenu/HeaderMenu.styles";
import SL from "./Menu.styles";


const FilterMenu = () => {
  return (
    <S.Menu>
      <ul>
        {SkillsFilter.map((item, index) => (
          <S.HoverBox>
            <SL.ListItem key={index}>
              <S.NavLink href={item}>
                <span>{item}</span>
              </S.NavLink>
            </SL.ListItem>
          </S.HoverBox>
        ))}
      </ul>
    </S.Menu>
  );
};


export default FilterMenu;