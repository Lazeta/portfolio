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
  min-width: 600px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;