import React from "react";
import { S } from "../headerMenu/HeaderMenu.styles";

type LinkPropsType = {
  href: string;
  title: string;
  children?: React.ReactNode;
};

export const Link = (props: LinkPropsType) => {
  const {title, href} = props
  return (
    <S.Link 
      title={title}
      href={href}
      >
      <span>{title}</span>
    </S.Link>
  )
};