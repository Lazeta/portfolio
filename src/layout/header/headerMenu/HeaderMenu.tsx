import styled from "styled-components";
import { myTheme } from "../../../components/global/MyTheme.styled";
import { HoverBox } from "../../../components/hovers/HoverBox.styled";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <HoverBox>
              <ListItem key={index}>
                <Link href="">
                  <span>{item}</span>
                </Link>
              </ListItem>
            </HoverBox>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`

ul {
  display: flex;
  justify-content:  flex-end;
  gap: 30px;
  list-style-type: none;
  }

  @media ${myTheme.media.mobile}{
    display: none;
  }
`;

const ListItem = styled.li`
  position: relative;
  display: inline-block;
  padding: 5px 15px;
  border: 1px solid ${myTheme.colors.secondary};
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  white-space: nowrap;
  font-size: 0.9rem;

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
`;

const Link = styled.a`
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  text-align: center;
`;
