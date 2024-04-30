import { useMediaQuery } from 'react-responsive';
import { useState } from "react";
import { headerItems } from "../../data/Data";
import S from "./headerMenu/HeaderMenu.styles";
import SL from "./Menu.styles";


const Menu = ({onLinkClick}: {onLinkClick?: () => void}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // replace 768px with your mobile breakpoint
  const [activeIndex, setActiveIndex] = useState<number | null>() // храним индекс активного элемента
  
  const handleLinkClick = (index: number) => { // обработчик клика по span элементу.
    if (!isMobile) {
      setActiveIndex(index);  // обновляем состояние активного элемента только если не мобильная версия
    }
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
                onSetActive={() => isMobile ? () => {} : handleLinkClick(index)}
                onSetInactive={() => isMobile ? () => {} : setActiveIndex(null)}
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