import React from "react";
import { Form } from "../../../components/forms/Form";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { S } from "./Contacts.styles";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id={'contacts'}>
      <SectionTitle title="Contacts" />
      <Form />
    </S.Contacts>
  );
};