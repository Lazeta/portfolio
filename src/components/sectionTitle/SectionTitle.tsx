import styled from 'styled-components'
import { myTheme } from '../global/MyTheme.styled'
import '../font/font.css';

type SectionTitlePropsType = {
  title: string
}

export const SectionTitle = ({title}: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle>
      {title}
    </StyledSectionTitle>
  )
}

const StyledSectionTitle = styled.h3`
  color: ${myTheme.colors.secondary};
  letter-spacing: 2px;
  font-size: 1.3rem;
  text-align: center;
`