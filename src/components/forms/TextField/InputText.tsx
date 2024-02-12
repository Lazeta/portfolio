import styled from "styled-components";
import { myTheme } from "../../global/MyTheme.styled";
import { InputTitle, StyledInputName } from "./InputName";

export const InputText = () => {
  return (
    <StyledInputText>
      <InputTitle>Message</InputTitle>
      <div>
        <input
          type="text"
          name="message"
          id="inputText"
          placeholder="Your message"
        />
      </div>
    </StyledInputText>
  );
};

const StyledInputText = styled(StyledInputName)`
  line-height: 1.5;
  padding-top: 20px;
  input {
    border: 2px solid ${myTheme.colors.primary};
    border-radius: 8px;
    width: 100%;
    height: 120px;
    background-color: transparent;
    /* vertical-align: top; */
    /* line-height: 1; */
  }
  ::placeholder {
    
  }
`;
