import React from "react";
import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";


export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About me</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
    a {
      color: ${myTheme.colors.secondary};
      text-decoration: none;
    }
  }
`;
