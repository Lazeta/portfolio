import styled from "styled-components";
import myTheme from "../../styles/global/MyTheme.styled";


const ListItem = styled.li`
  position: relative;
  display: inline-block;
  padding: 5px 15px;
  border: 1px solid ${myTheme.colors.secondary};
  color: ${myTheme.colors.secondary};
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.4s ease;

  &:hover,
  &:active {
    color: ${myTheme.colors.flashColor};
    transition: color 0.4s ease;
  }

  @media ${myTheme.media.mobile} {
    font-size: 1.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background-color: ${myTheme.colors.lightFont};
    transition: 0.3s ease-in-out;
    transform: scaleY(1);
  }
  
  &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background-color: ${myTheme.colors.lightFont};
    transition: 0.3s ease-in-out;
    transform: scaleX(1);
    transition-delay: 0.5s;
  }

  &:hover::before, &.active::before {
    transform: scaleY(0);
  }
  &:hover::after, &.active::after {
    transform: scaleX(0);
  }


  span {
    position: relative;
    z-index: 1;

    @media ${myTheme.media.mobile} {
      z-index: 3;
    }
  }
`;


const SL = {
  ListItem,
}


export default SL