import styled from 'styled-components'
import myTheme from '../../styles/global/MyTheme.styled'


const SectionTitle = ({ title }: {title: string}) => (
  <StyledSectionTitle>{title}</StyledSectionTitle>
)

export const StyledSectionTitle = styled.h2`
  color: ${myTheme.colors.secondary};
  letter-spacing: 2px;
  font-size: 1.3rem;
  text-align: center;
  padding: 10px;
`


export default SectionTitle