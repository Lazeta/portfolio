import React from "react";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import Form from "../../../components/forms/Form";
import S from "./Contacts.styles";


const Contacts: React.FC = () => (
  <S.Contacts id={'contacts'}>
  <SectionTitle title="Contacts" />
  <Form />
  </S.Contacts>
)


export default Contacts