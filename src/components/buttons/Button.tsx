import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

type ButtonPropsType = {
  title: string
  width?: string
  font?: string
};
type StyledButtonPropsType = {
  height?: string
  width?: string | undefined
  font?: string
  color?: string
}

export const Button = (props: ButtonPropsType) => {
  const { title} = props; // Извлекаем title из props
  return (
    <>
      <StyledButton width={props.width} font={props.font}>
        {title}
      </StyledButton>
    </>
  );
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.font || "1rem"};
  color: ${(props) => props.color || `${myTheme.colors.lightFont}`};
  margin: 0 auto;
  border: none;
  border-radius: 8px;
  background: ${myTheme.colors.primary};
`;
