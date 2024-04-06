import styled from "styled-components";
import { myTheme } from "../global/MyTheme.styled";
import { S } from "../headerMenu/HeaderMenu.styles";
import { Link } from "../link/Link";

type ListItemProps = {
  menuItems: Array<string>;
};

export const ListItem: React.FC<ListItemProps> = ({ menuItems }) => {
  return (
    <ul>
      {menuItems.map((item, index) => {
        return (
          <S.HoverBox>
            <StyledListItem key={index}>
              <Link href={item}>
                <span>{item}</span>
              </Link>
            </StyledListItem>
          </S.HoverBox>
        );
      })}
      ;
    </ul>
  );
};

const StyledListItem = styled.li`
  position: relative;
  display: inline-block;
  padding: 5px 15px;
  border: 1px solid ${myTheme.colors.secondary};
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  white-space: nowrap;
  font-size: 0.9rem;

  @media ${myTheme.media.mobile} {
    display: flex;
    text-decoration: column;
    font-size: 1.5rem;
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
    z-index: 1;

    @media ${myTheme.media.mobile} {
      z-index: 3;
    }
  }
`;
