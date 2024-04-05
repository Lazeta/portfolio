import React from "react";
import { HoverBox } from "../../../components/hovers/HoverBox.styled";
import { Link } from "../../../components/link/Link";
import { ListItem } from "../../../components/listItem/ListItem";
import { S } from "../../../components/headerMenu/HeaderMenu.styles";

type ArrayHeaderItemsProps = {
  menuItems: Array<string>;
};

export const DesktopMenu: React.FC<ArrayHeaderItemsProps> = ({ menuItems }) => {
  return (
    <S.DesktopMenu>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <HoverBox>
              <ListItem index={index}>
                <Link href="/url">
                  <span>{item}</span>
                </Link>
              </ListItem>
            </HoverBox>
          );
        })}
        ;
      </ul>
    </S.DesktopMenu>
  );
};
