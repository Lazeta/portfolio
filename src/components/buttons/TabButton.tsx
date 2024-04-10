import React from "react";
import { S } from "./Button.styles";

type TabButtonPropsType = {
  title?: string;
  children?: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

export const TabButton = (props: TabButtonPropsType) => {
  return (
    <S.TabButton
      active={props.isActive}
      onClick={props.onClick}
      title={props.title}
      width={"100px"}
    >
      {props.title}
    </S.TabButton>
  );
};