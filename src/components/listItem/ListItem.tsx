import { S } from "../headerMenu/HeaderMenu.styles";
import { SL } from "../listItem/ListItem.styles";
import { Link } from "../link/Link";


export const ListItem = (props: { menuItems: Array<string> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <S.HoverBox>
            <SL.ListItem key={index}>
              <Link href={item}>
                <span>{item}</span>
              </Link>
            </SL.ListItem>
          </S.HoverBox>
        );
      })}
      ;
    </ul>
  );
};