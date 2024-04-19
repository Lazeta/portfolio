import { anchorObjects } from "../../data/Data";
import { S } from "./headerMenu/HeaderMenu.styles";
import { SL } from "./Menu.styles";

export const headerItems = ["Home", "About me", "Projects", "Skills", "Contacts"];

export const Menu = () => {
  return (
    <S.Menu>
      <ul>
        {anchorObjects.map((item, index) => {
          return (
            <S.HoverBox>
              <SL.ListItem key={index}>
                <S.Link href={`#${item.href}`}>
                  <span>{item.title}</span>
                </S.Link>
              </SL.ListItem>
            </S.HoverBox>
          );
        })};
      </ul>
    </S.Menu>
  );
};