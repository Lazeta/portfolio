import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

export const ButtonSubmit = () => {
  return (
    <StyledButtonSubmit>
      <button type="submit">Submit</button>
    </StyledButtonSubmit>
  );
};

export const StyledButtonSubmit = styled.button`
  width: 500px;
  margin: 20px auto;
  button {
    border: 2px solid transparent;
    padding: 0;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    font-size: 1.3rem;
    background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  }
`;
