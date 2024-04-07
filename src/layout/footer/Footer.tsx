import React from "react";
import { SocialLists } from "../../components/socialLists/SocialLists";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { S } from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction="column" align="center">
        <SocialLists/>
        <S.Copyright>Developed by Stanislav Chekh in 2024</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};