import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

type LinkPropsType = {
  href: string;
  title: string;
  children: React.ReactNode;
};

export const Link: React.FC<LinkPropsType> = ({ href, title }) => {
  return (
    <>
      <StyledLink>

      </StyledLink>
    </>
  );
};

const StyledLink = styled.a`
  background-color: ${myTheme.colors.primary};
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  text-align: center;
`;