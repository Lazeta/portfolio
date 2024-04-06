import styled from "styled-components";

const Skills = styled.section`
  max-width: 100%;
  max-height: 100%;
  padding: 20px 0;
`;

const SkillsMenu = styled.div`
  ul {
    display: flex;
    gap: 30px;
    padding: 20px 0;
    max-width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const S = {
  Skills,
  SkillsMenu,
};
