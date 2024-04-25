import { Button } from "../buttons/Button";
import { S } from "./Form.styles";

export const Form = () => {
  return (
    <S.Form>
      <S.Field placeholder="name" />
      <S.Field placeholder="subject" />
      <S.Field placeholder="message" as="textarea" height="120px" />
      <Button title="Submit" onClick={() => console.log('Button will be clicked!')}/>
    </S.Form>
  );
};