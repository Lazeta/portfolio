import styled from "styled-components";
import { InputTitle, StyledInputName } from "./InputName";

export const InputEmail = () => {
  return (
    <StyledInputEmail>
      <InputTitle>Email</InputTitle>
      <div>
        <input
          type="email"
          name="email"
          id="inputEmail"
          placeholder="Enter @email"
        />
      </div>
    </StyledInputEmail>
  );
};

const StyledInputEmail = styled(StyledInputName)`
  line-height: 1.5;
  padding-top: 20px;
`;
