import React from "react";
import S from "../menu/headerMenu/HeaderMenu.styles";


type LinkPropsType = {
  href: string;
  code?: string;
  title: string;
  children?: React.ReactNode;
  shouldUnderline?: boolean;
};

const NavLink = (props: LinkPropsType) => {
  const {title, href, shouldUnderline, code} = props

  return (
    <S.NavLink
      title={title}
      href={href || code}
      className={shouldUnderline ? "underlined-text" : ""}
      >
      <span>{title}</span>
    </S.NavLink>
  )
};


export default NavLink