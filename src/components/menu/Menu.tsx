import { S } from "./headerMenu/HeaderMenu.styles";
import { anchorObjects } from "../../data/Data";
import { Link } from "react-scroll/modules";
import { SL } from "./Menu.styles";

export const Menu = () => {
  return (
    <S.Menu>
      <ul>
        {anchorObjects.map((item, index) => {
          return (
            <S.HoverBox>
              <SL.ListItem key={index}>
                <Link to={item.href} spy={true} smooth={true}>
                  <span>{item.title}</span>
                </Link>
              </SL.ListItem>
            </S.HoverBox>
          );
        })}
        ;
      </ul>
    </S.Menu>
  );
};
