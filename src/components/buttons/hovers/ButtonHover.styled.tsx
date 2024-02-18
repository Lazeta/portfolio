import styled from 'styled-components';
import { myTheme } from '../../global/MyTheme.styled';

export const StyledButton = styled.button`
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;

  --border-right: 3px;
  --text-stroke-color: ${myTheme.colors.secondary};
  --animation-color: #37FF8B;
  --fs-size: 1rem;
  letter-spacing: 2px;
  text-decoration: none;
  font-size: var(--fs-size);
  /* font-family: "Monttserat"; */
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);

  .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.7s;
    -webkit-text-stroke: 1px var(--animation-color);
  }

  &:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;