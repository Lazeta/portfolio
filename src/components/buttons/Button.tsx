import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";
import { StyledButton } from "./Button.styled";

type ButtonPropsType = {
  title: string
  width?: string
  font?: string
};


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