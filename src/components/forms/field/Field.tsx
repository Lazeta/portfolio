import styled from 'styled-components'

type FieldPropsType = {
    placeholder?: string
    type?: string
    as?: string
}

const Field = (props: FieldPropsType) => {
  return (
    <StyledField>
      
    </StyledField>
  )
}

const StyledField = styled.input<FieldPropsType>`
    
`