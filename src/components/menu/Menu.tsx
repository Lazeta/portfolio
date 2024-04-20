import { S } from "./headerMenu/HeaderMenu.styles";
import { anchorObjects } from "../../data/Data";
import { SL } from "./Menu.styles";

export const Menu = () => {
  return (
    <S.Menu>
      <ul>
        {anchorObjects.map((item, index) => {
          return (
            <S.HoverBox>
              <SL.ListItem key={index}>
                <S.ItemLink
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                >
                  <span>{item.title}</span>
                </S.ItemLink>
              </SL.ListItem>
            </S.HoverBox>
          );
        })}
      </ul>
    </S.Menu>
  );
};
