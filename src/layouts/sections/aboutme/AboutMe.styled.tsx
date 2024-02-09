import styled from "styled-components";

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <h3>About me</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        maiores consequuntur dolore quos in. Doloribus blanditiis aspernatur
        dignissimos provident, vitae dicta placeat sint nemo repudiandae ex,
        mollitia quaerat aperiam temporibus.
      </p>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled.div`
  width: auto;
  min-height: 150px;
  border: 2px solid pink;
`;
