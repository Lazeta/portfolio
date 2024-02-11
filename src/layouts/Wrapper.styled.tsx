import styled from "styled-components";
import { myTheme } from "../components/global/MyTheme.styled";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${myTheme.colors.darkTheme};
  margin: 0 auto;
`;
