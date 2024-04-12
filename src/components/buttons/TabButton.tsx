import { S } from "./Button.styles";
import React from "react";

type TabButtonPropsType = {
  title: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

export const TabButton = (props: TabButtonPropsType) => {
  return (
    <S.TabButton
      active={props.isActive}
      onClick={props.onClick}
      width={"100px"}
    >
      {props.title}
    </S.TabButton>
  );
};