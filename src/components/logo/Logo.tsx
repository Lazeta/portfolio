import React from "react";
import { Icon } from "../icon/icon";
// import logoSvg from '../../assets/images/icons/react-svgrepo-com.svg'; первый метод добавить иконку и в рендере в теге img в пути src={импорт иконки}

export const Logo = () => {
  return (
    <a href="">
      <Icon iconId={'css3SvgrepoCom'}/>
    </a>
  );
};
