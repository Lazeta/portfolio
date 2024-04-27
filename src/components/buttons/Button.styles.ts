import { myTheme } from "../../styles/global/MyTheme.styled";
import styled, { css } from "styled-components";

type StyledButtonPropsType = {
  height?: string;
  width?: string;
  font?: string;
  color?: string;
  active?: boolean;
};

export const Button = styled.button<StyledButtonPropsType>`
  ${(props) => props.active && css`
    font-size: 1.5rem;
 `}
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
 };
`;

// Tab Button
const TabButton = styled.button<StyledButtonPropsType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.font || "1rem"};
  color: ${(props) => props.color || `${myTheme.colors.lightFont}`};
  margin: 0 auto;
  border: none;
  border-radius: 8px;
  background: ${myTheme.colors.primary};
  transition: ${myTheme.animations.default};
  font-weight: 400;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 700;
      background-position: right center;
      background-size: 200% auto;
      -webkit-animation: pulse 1.5s infinite;
      animation: pulse512 1.5s infinite;
      transition: ${myTheme.animations.default};
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
`;

export const S = {
  Button,
  TabButton,
}