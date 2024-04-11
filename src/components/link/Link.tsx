import React from "react";
import { S } from "../headerMenu/HeaderMenu.styles";

export type ProjectLinksPropsType = "demo" | "code";

type LinkPropsType = {
  href: string;
  title?: string;
  children?: React.ReactNode;
  // onClick: () => void;
  // isActive: boolean;
  // tabsItems: Array<{ status: ProjectLinksPropsType; title: string }>;
  // changeFilterStatus: (value: ProjectLinksPropsType) => void;
  // currentFilterStatus: string;
};

export const Link:React.FC<LinkPropsType> = (props: LinkPropsType) => {
  return (
    <S.Link 
    href={props.href}
    title={props.title}
    // onClick={props.onClick}
    // active={props.isActive}
    >
    {props.children || props.title}
    </S.Link>
  )
};
