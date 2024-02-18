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
            <ButtonBox>
              <li key={index}>
                <a>
                  <span>{item}</span>
                </a>
              </li>
            </ButtonBox>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style-type: none;
    li {
      position: relative;
      display: inline-block;
      padding: 5px 15px;
      border: 1px solid ${myTheme.colors.secondary};
      color: ${myTheme.colors.secondary};
      text-decoration: none;
      white-space: nowrap;
      a {
        font-size: 1rem;
        color: ${myTheme.colors.secondary};
        text-decoration: none;
      }
      &::before {
        content: "";
        position: absolute;
        top: 6px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% - 12px);
        background-color: ${myTheme.colors.lightFont};
        transition: 0.3s ease-in-out;
        transform: scaleY(1);
      }

      &:hover::before {
        transform: scaleY(0);
      }

      &::after {
        content: "";
        position: absolute;
        left: 6px;
        top: -2px;
        height: calc(100% + 4px);
        width: calc(100% - 12px);
        background-color: ${myTheme.colors.lightFont};
        transition: 0.3s ease-in-out;
        transform: scaleX(1);
        transition-delay: 0.5s;
      }

      &:hover::after {
        transform: scaleX(0);
      }

      span {
        position: relative;
        z-index: 3;
      }
    }
  }
`;

const ButtonBox = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;
