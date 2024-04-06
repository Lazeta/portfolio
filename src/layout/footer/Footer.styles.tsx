import styled from "styled-components";
import { myTheme } from "../../components/global/MyTheme.styled";


const Copyright = styled.small`
color: ${myTheme.colors.secondary};
text-align: center;
`;


const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 20px;
  list-style-type: none;
`;

const SocialItem = styled.li`
    cursor: pointer;
`;

const SocialLink = styled.a`
  display: inline-flex;
  gap: 50px;
`;


const Footer = styled.footer`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  min-height: 20vh;
  margin-top: 20px;
`;


export const F = {
  Footer,
  Copyright,
  SocialItem,
  SocialLink,
  SocialList,
} 