import { ButtonSubmit } from "../buttons/ButtonSubmit";
import { FlexWrapper } from "../menu/FlexWrapper";
import { InputEmail } from "./TextField/InputEmail";
import { InputName } from "./TextField/InputName";
import { InputText } from "./TextField/InputText";

export const Form = () => {
  return (
    <FlexWrapper direction="column" justify="space-between">
      <InputName />
      <InputEmail />
      <InputText />
      <ButtonSubmit />
    </FlexWrapper>
  );
};
