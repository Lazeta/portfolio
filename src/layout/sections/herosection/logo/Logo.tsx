import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../../../../assets/images/logo.jpg";
import myTheme from "../../../../styles/global/MyTheme.styled";

const Logo = () => {
  return (
    <StyledLogo>
        <motion.div
          whileHover={{ scale: 1.1 }}
          // whileTap={{ scale: 0.9 }}
        >
          <img src={logo} alt="bad way logo" />
        </motion.div>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  padding-top: 30px;
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


export default Logo