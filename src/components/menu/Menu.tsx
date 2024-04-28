import { headerItems } from "../../data/Data";
import S from "./headerMenu/HeaderMenu.styles";
import SL from "./Menu.styles";


const Menu = ({onLinkClick}: {onLinkClick?: () => void}) => {
  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <S.Menu>
      <ul>
        {headerItems.map((item, index) => (
          <S.HoverBox>
            <SL.ListItem>
              <S.ItemLink key={index}
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
        ))}
      </ul>
    </S.Menu>
  );
};


export default Menu