import React from "react";
import FlexWrapper from "../../components/wrapper/FlexWrapper";
import SocialLists from "./socialLists/SocialLists";
import S from "./Footer.styles";


const Footer: React.FC = () => (
  <S.Footer>
  <FlexWrapper direction="column" align="center">
    <SocialLists/>
    <S.Copyright>Developed by Stanislav Chekh in 2024</S.Copyright>
  </FlexWrapper>
  </S.Footer>
)


export default Footer