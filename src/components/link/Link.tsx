import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

type LinkPropsType = {
  href: string;
  title: string;
};

export const Link: React.FC<LinkPropsType> = ({ href, title }) => {
  return <StyledLink href={href}>{title}</StyledLink>;
};

const StyledLink = styled.a`
  background-color: ${myTheme.colors.darkPrimary};
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${myTheme.colors.secondary}
`;
