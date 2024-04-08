import React from "react";
import styled, { css } from "styled-components";
import { myTheme } from "../global/MyTheme.styled";
import { StyledButtonPropsType } from "./Button.styles";

type TabButtonPropsType = {
  title?: string;
  children?: React.ReactNode;
  onClick: () => void;
};

export const TabButton = (props: TabButtonPropsType) => {
  return (
    <StyleTabButton onClick={props.onClick} title={props.title} width={'100px'}>
      {props.title}
    </StyleTabButton>
  );
};

const StyleTabButton = styled.button<StyledButtonPropsType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.font || "1rem"};
  color: ${(props) => props.color || `${myTheme.colors.lightFont}`};
  margin: 0 auto;
  border: none;
  border-radius: 8px;
  background: ${myTheme.colors.primary};
  cursor: pointer;
  &:hover {
    background-position: right center;
    background-size: 200% auto;
    -webkit-animation: pulse 2s infinite;
    animation: pulse512 1.5s infinite;
  }
  ${(props) => props.active && css`
     font-size: 1.2rem;
  `}
  @keyframes pulse512 {
  0% {
   box-shadow: 0 0 0 0 #00d9ff66;
  }
 
  70% {
   box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
  }
 
  100% {
   box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
  }
 }
`