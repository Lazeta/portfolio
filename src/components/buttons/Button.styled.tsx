import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";


type StyledButtonPropsType = {
    height?: string
    width?: string | undefined
    font?: string
    color?: string
  }

export const StyledButton = styled.button<StyledButtonPropsType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.font || "1rem"};
  color: ${(props) => props.color || `${myTheme.colors.lightFont}`};
  margin: 0 auto;
  border: none;
  border-radius: 8px;
  background: ${myTheme.colors.primary};
  cursor: pointer;
`;