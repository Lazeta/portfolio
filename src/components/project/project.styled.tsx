import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

export const StyledProject = styled.div`
  max-width: 100%;
  width: 460px;
  max-height: 100%;
  background-color: ${myTheme.colors.darkFont}
`

export const UseTechnologys = styled.span`
  /* на основе компоненты кнопок, отстилизовать плашки чтобы с 
  ними нельзя было взаимодействовать, но выглядели как кнопки */
  display: flex;
  gap: 10px;
`

export const StyledProjectDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 20px;
`

export const StyledImage = styled.img`
  max-width: 100%;
  object-fit: cover;
`