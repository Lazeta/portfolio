import { useMediaQuery } from 'react-responsive';
import { useState } from "react";
import { headerItems } from "../../data/Data";
import S from "./headerMenu/HeaderMenu.styles";
import SL from "./Menu.styles";


const Menu = ({onLinkClick}: {onLinkClick?: () => void}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // replace 768px with your mobile breakpoint
  const [activeIndex, setActiveIndex] = useState<number | null>() // save index active element
  
  // handle click by span element
  const handleLinkClick = (index: number) => { 
    if (!isMobile) {
      setActiveIndex(index);  // обновляем состояние активного элемента только если не мобильная версия
    }
    // Running this function will determine what happens when a link is clicked.
    // This can be customized externally when the Menu component is used elsewhere.
    if (onLinkClick) {
      onLinkClick();
    }
  };
  

  return (
    <S.Menu>
      <ul>
        {headerItems.map((item, index) => (
          <S.HoverBox>
            <SL.ListItem className={isMobile ? "" : index === activeIndex ? 'active' : ''}> {/* не применяем класс active в мобильной версии*/}
              <S.ItemLink key={index}
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-150}
                // onSetActive sets the state when the clicked link corresponds to the scrolled section. If on a mobile device, it will not perform any action.
                onSetActive={() => isMobile ? () => {} : handleLinkClick(index)}
                // onSetInactive will reset the state when the scrolled section no longer corresponds to the active link. If on a mobile device, is will not perform any action.
                onSetInactive={() => isMobile ? () => {} : setActiveIndex(null)}
                // onClick will perform the handleLinkClick function when link is clicked
                onClick={() => handleLinkClick(index)}
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