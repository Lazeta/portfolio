import { S } from "../headerMenu/HeaderMenu.styles";
import { SL } from "../listItem/ListItem.styles";


export const ListItem = (props: { menuItems: Array<string> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return (
          <S.HoverBox>
            <SL.ListItem key={item[index]}>
              <S.Link href={item}> 
                <span>{item}</span>
              </S.Link>

              {/* <S.Link>
                <Link key={index} 
                  isActive={item.type === props.currentFilterStatus}
                  onClick={() => {props.changeFilterStatus(item.type)}}
                  title={item.title}
                  // href={""}
                />
              </S.Link> */}
            </SL.ListItem>
          </S.HoverBox>
        )
      })}
      ;
    </ul>
  );
};