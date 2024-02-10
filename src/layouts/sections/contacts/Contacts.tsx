import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle";

export const Contacts = () => {
  return (
    <StyledContacts>
        <SectionTitle title="Contacts"/>
    </StyledContacts>
  )
};

const StyledContacts = styled.div`
  border: 1px solid red;
  
  max-width: 100%;
  max-height: 100%;
  padding: 20px 0;
  width: 100%;
  height: 100%;
`;