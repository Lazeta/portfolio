import { ListItem } from "../listItem/ListItem";
import {S} from "../headerMenu/HeaderMenu.styles"

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <S.Menu>
      <ListItem menuItems={props.menuItems}/>
    </S.Menu>
  );
};