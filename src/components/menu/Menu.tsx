import { S } from "./headerMenu/HeaderMenu.styles";
import { headerItems } from "../../data/Data";
import { SL } from "./Menu.styles";

type MenuPropsType = {
  onLinkClick?: () => void;
};

export const Menu = (props: MenuPropsType) => {
  const handleLinkClick = () => {
    if (props.onLinkClick) {
      props.onLinkClick();
    }
  };

  return (
    <S.Menu>
      <ul>
        {headerItems.map((item, index) => {
          return (
            <S.HoverBox>
              <SL.ListItem>
                <S.ItemLink
                  key={index}
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  onClick={handleLinkClick}
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
