import styled from "styled-components";
import { myTheme } from "../../global/MyTheme.styled";

export const InputName = () => {
  return (
    <StyledInputName>
      <InputTitle>Name</InputTitle>
      <div>
        <input
          type="text"
          name="Name"
          id="inputName"
          placeholder="Enter name"
        />
      </div>
    </StyledInputName>
  );
};

export const StyledInputName = styled.div`
  width: 500px;
  margin: 0 auto;
  line-height: 1.5;
  padding-top: 20px;
  input {
    border: 2px solid ${myTheme.colors.any};
    padding: 0;
    border-radius: 8px;
    width: 100%;
    height: 30px;
    background-color: transparent;
  }
  ::placeholder {
    color: ${myTheme.colors.lightTheme};
    font-size: 1rem;
    padding: 5px 10px 0 10px;
    vertical-align: top;
  }
`;

export const InputTitle = styled.div`
  text-align: left;
  padding-bottom: 5px;
  font-size: 0.8rem;
  color: ${myTheme.colors.secondary}
`;
