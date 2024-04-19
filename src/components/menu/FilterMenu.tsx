import { S } from "./headerMenu/HeaderMenu.styles";
import { SL } from "./Menu.styles";

export const SkillsFilter = [
  "Main stack",
  "Coding languages",
  "Bundlers",
  "Development environment",
  "Styles",
  "Libraries",
  "Metodology",
];

export const FilterMenu = () => {
  return (
    <S.Menu>
      <ul>
        {SkillsFilter.map((item, index) => {
          return (
            <S.HoverBox>
              <SL.ListItem key={index}>
                <S.Link href={item}>
                  <span>{item}</span>
                </S.Link>
              </SL.ListItem>
            </S.HoverBox>
          );
        })}
        ;
      </ul>
    </S.Menu>
  );
};
