import React from "react";
import { S } from "../headerMenu/HeaderMenu.styles";

// export type ProjectLinksPropsType = "demo" | "code";

type LinkPropsType = {
  href?: string;
  title?: string;
  children?: React.ReactNode;
  // onClick?: () => void;
  // isActive?: boolean;
};

export const Link:React.FC<LinkPropsType> = (props: LinkPropsType) => {
  return (
    <S.Link 
      // active={props.isActive}
      // onClick={props.onClick}
      title={props.title}
      href={props.href}
      >
      <span>{props.title}</span>
    </S.Link>
  )
};