import styled from "styled-components";
import { myTheme } from "../components/global/MyTheme.styled";

export const Wrapper = styled.div`
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${myTheme.colors.theme};
  margin: 0 auto;
`;