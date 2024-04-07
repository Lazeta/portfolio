import { S } from "../../headerMenu/HeaderMenu.styles";
import { SL } from "../../listItem/ListItem.styles";
import { Link } from "../../link/Link";


export const TabMenu = (props: { tabsItems: Array<{status: 'all' | 'landing' | 'react' | 'spa', title: string}> }) => {
  return (
    <ul>
      {props.tabsItems.map((item, index) => {
        return (
          <S.HoverBox>
            <SL.ListItem key={index}>
                <Link href=''>{item.title}</Link>
            </SL.ListItem>
          </S.HoverBox>
        );
      })};
    </ul>
  );
};