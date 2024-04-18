import styled from "styled-components";
import logo from "../../components/assets/images/logo.jpg";
import { myTheme } from "../../../../styles/global/MyTheme.styled";
// import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo>
        {/* <Icon iconId={"css3SvgrepoCom"} /> */}

        <img src={logo} alt="#" />
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  max-width: 30%;
  width: 100%;

  @media ${myTheme.media.mobile} {
    width: 0%;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 5px 5px 10px 2px;
  }
`;
