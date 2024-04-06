import { Form } from "../../../components/forms/Form";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { S } from "./Contacts.styles";

export const Contacts = () => {
  return (
    <S.Contacts>
      <SectionTitle title="Contacts" />
      <Form />
    </S.Contacts>
  );
};

