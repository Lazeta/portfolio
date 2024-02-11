import styled from "styled-components";
import { Form } from "../../../components/forms/Form";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Contacts = () => {
  return (
    <StyledContacts>
        <SectionTitle title="Contacts"/>
        <Form/>
    </StyledContacts>
  )
};

const StyledContacts = styled.div`
  max-width: 100%;
  max-height: 100%;
  padding: 20px 0;
`;