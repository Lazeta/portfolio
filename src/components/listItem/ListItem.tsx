import { S } from "../headerMenu/HeaderMenu.styles";
import { SL } from "../listItem/ListItem.styles";
import { Link } from "../link/Link";

type ListItemProps = {
  menuItems: Array<string>;
};

export const ListItem: React.FC<ListItemProps> = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((item, index) => {
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