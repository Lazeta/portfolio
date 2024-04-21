import { S } from "./headerMenu/HeaderMenu.styles";
import { headerItems } from "../../data/Data";
import { SL } from "./Menu.styles";

type MenuPropsType = {
  onClick?: () => void;
};

export const Menu = (props: MenuPropsType) => {

  return (
    <S.Menu>
      <ul>
        {headerItems.map((item, index) => {
          return (
            <a href="" onClick={() => {
              
            }}>
              <S.HoverBox>
                <SL.ListItem>
                  <S.ItemLink
                    key={index}
                    to={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-200}
                  >
                    <span>{item.title}</span>
                  </S.ItemLink>
                </SL.ListItem>
              </S.HoverBox>
            </a>
          );
        })}
      </ul>
    </S.Menu>
  );
};
