import React from "react";
import { S } from "../headerMenu/HeaderMenu.styles";

type LinkPropsType = {
  href: string;
  title: string;
  children?: React.ReactNode;
  shouldUnderline?: boolean;
};

export const Link = (props: LinkPropsType) => {
  const {title, href, shouldUnderline} = props
  return (
    <S.Link 
      title={title}
      href={href}
      className={shouldUnderline ? "underlined-text" : ""}
      >
      <span>{title}</span>
    </S.Link>
  )
};