import React from "react";
import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";

// классический способ типизации одного значения
// type MenuPropsType = {
//   menuItems: Array<string>
// }
// более лаконичный способ когда нужно лишь один пропс с одним значением передать
// (props: {menuItems: Array<string>})

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
        ;
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
