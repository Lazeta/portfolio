import styled from "styled-components";
import { myTheme } from "./global/MyTheme.styled";

export const Wrapper = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${myTheme.colors.theme};
  margin: 0 auto;
`;
