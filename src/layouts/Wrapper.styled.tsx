import styled from "styled-components";
import { myTheme } from "../components/global/MyTheme.styled";

export const Wrapper = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${myTheme.colors.theme};
  margin: 0 auto;
`;
