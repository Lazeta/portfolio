import React from "react";
import StyledButton from "./ButtonHover.styles";


interface ButtonHoverProps {
  text: string;
}

const ButtonHover: React.FC<ButtonHoverProps> = ({ text }) => (
  <StyledButton data-text={text}>
    <span className="actual-text">&nbsp;{text}&nbsp;</span>
    <span aria-hidden="true" className="hover-text">
      &nbsp;{text}&nbsp;
    </span>
  </StyledButton>
);

export default ButtonHover;
