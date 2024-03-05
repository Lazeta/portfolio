import styled, { css } from "styled-components";
import { myTheme } from "../../global/MyTheme.styled";

export const BurgerButton = () => {
  return (
    <StyledBurgerButton id="myBtn" isOpen={true}>
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </StyledBurgerButton>
  );
};

const StyledBurgerButton = styled.div<{ isOpen: boolean }>`
  display: none;

  @media ${myTheme.media.mobile} {
    padding-top: 40px;
    display: flex;
  }
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      position: fixed;
      top: 0px;
      right: -130px;
      width: 200px;
      height: 200px;
      background-color: rgba(31, 38, 38, 0);
      z-index: 100;
      transition: all ease-in-out 1s;
      animation: animate 1s;

      @keyframes animate {
        from {
          /* top: -30px; */
          opacity: 0;
        }
        to {
          /* top: 0px; */
          opacity: 1;
        }
      }
    `}

  #checkbox {
    display: none;
  }

  .toggle {
    position: relative; // add fixed before relative
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: 0.5s;
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: ${myTheme.colors.secondary};
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }

  #checkbox:checked + .toggle .bars {
    position: absolute;
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar2 {
    transform: scaleX(0);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar1 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle #bar3 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: 0.5s;
  }

  #checkbox:checked + .toggle {
    transition-duration: 0.5s;
    transform: rotate(180deg);
  }
`;
