import { S } from "./headerMenu/HeaderMenu.styles";
import { SkillsFilter } from "../../data/Data";
import { SL } from "./Menu.styles";

export const FilterMenu = () => {
  return (
    <S.Menu>
      <ul>
        {SkillsFilter.map((item, index) => {
          return (
            <S.HoverBox>
              <SL.ListItem key={index}>
                <S.NavLink href={item}>
                  <span>{item}</span>
                </S.NavLink>
              </SL.ListItem>
            </S.HoverBox>
          )
        })}
      </ul>
    </S.Menu>
  );
};
