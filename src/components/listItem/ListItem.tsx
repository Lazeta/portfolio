import { S } from "../headerMenu/HeaderMenu.styles";
import { SL } from "../listItem/ListItem.styles";


export const ListItem = (props: { menuItems: Array<string> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <S.HoverBox>
            <SL.ListItem key={item}>
              <S.Link href={item}> 
                <span>{item}</span>
              </S.Link>
            </SL.ListItem>
          </S.HoverBox>
        )
      })}
      ;
    </ul>
  );
};