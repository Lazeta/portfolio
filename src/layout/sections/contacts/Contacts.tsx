import styled from "styled-components";
import { Form } from "../../../components/forms/Form";
import { SectionTitle } from "../../../components/sectiontitle/SectionTitle";

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle title="Contacts" />
      <Form />
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  margin: 0 auto;
`;