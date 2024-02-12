import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

export const StyledProject = styled.div`
  max-width: 100%;
  width: 460px;
  max-height: 100%;
  background-color: ${myTheme.colors.lightFont};
`;

export const UseTechnologys = styled.span`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const StyledProjectDescription = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 20px;
  flex-wrap: wrap;

`;

export const StyledImage = styled.img`
  max-width: 100%;
  width: 460px;
  height: 300px;
  object-fit: cover;
`;
