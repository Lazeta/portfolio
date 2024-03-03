import React from 'react';
import { StyledButton } from './ButtonHover.styled';

interface ButtonHoverProps {
  text: string;
}

export const ButtonHover: React.FC<ButtonHoverProps> = ({ text }) => {
  return (
    <StyledButton data-text={text}>
      <span className="actual-text">&nbsp;{text}&nbsp;</span>
      <span aria-hidden="true" className="hover-text">&nbsp;{text}&nbsp;</span>
    </StyledButton>
  );
};