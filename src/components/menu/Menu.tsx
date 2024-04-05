import {S} from "../headerMenu/HeaderMenu.styles"

export const Menu = (props: { menuItems: Array<string> }) => {
  return (
    <S.Menu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
              <li key={index}>
                <a href="/">
                  <span>{item}</span>
                </a>
              </li>
          );
        })}
      </ul>
    </S.Menu>
  );
};