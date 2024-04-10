import React from "react";
import { S } from "../headerMenu/HeaderMenu.styles";

type LinkPropsType = {
  href?: string;
  title?: string;
  children?: React.ReactNode;
  // onClick: () => void;
  // isActive: boolean;
};

export const Link: React.FC<LinkPropsType> = ({ href, title, children}) => {
  return <S.Link href={href}>
    {children || title}
  </S.Link>;
};
