import styled from 'styled-components'
import { myTheme } from '../global/MyTheme.styled'
import React from "react";

type SectionTitlePropsType = {
  title: string
}

export const SectionTitle:React.FC<SectionTitlePropsType> = ({title}: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle>
      {title}
    </StyledSectionTitle>
  )
}

export const StyledSectionTitle = styled.h2`
  color: ${myTheme.colors.secondary};
  letter-spacing: 2px;
  font-size: 1.3rem;
  text-align: center;
`