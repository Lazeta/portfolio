import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

export const StyledProject = styled.div`
  max-width: 100%;
  width: 48%;
  background-color: ${myTheme.colors.lightFont};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UseTechnologys = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding-right: 40px;
`;

export const ButtonUseTechnologys = styled.div`
  
`;

export const StyledProjectDescription = styled.div`
  display: flex;
  gap: 0px;
  padding: 0 15px;
  flex-wrap: wrap;
  span {
    color: ${myTheme.colors.secondary};
  }
  p {
    color: ${myTheme.colors.secondary};
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
