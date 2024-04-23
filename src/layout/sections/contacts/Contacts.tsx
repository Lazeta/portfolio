import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";
import { Form } from "../../../components/forms/Form";
import { S } from "./Contacts.styles";
import React from "react";

export const Contacts: React.FC = () => {
  return (
    <S.Contacts id={'contacts'}>
      <SectionTitle title="Contacts" />
      <Form />
    </S.Contacts>
  );
};