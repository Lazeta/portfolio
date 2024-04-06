import { SocialLists } from "../../components/socialLists/SocialLists";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { F } from "./Footer.styles";

export const Footer = () => {
  return (
    <F.Footer>
      <FlexWrapper direction="column" align="center">
        <SocialLists/>
        <F.Copyright>Developed by Stanislav Chekh in 2024</F.Copyright>
      </FlexWrapper>
    </F.Footer>
  );
};