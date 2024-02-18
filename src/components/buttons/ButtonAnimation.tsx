export const ButtonAnimation = () => {
  return
    // <StyledButtonAnimation>
    //     <span>Button</span>
    //     <span>Button</span>
    //     <span>Button</span>
    // </StyledButtonAnimation>

    // <StyledButtonAnimation data-text="Awesome">
    //   <StyledSpanAnimation>&nbsp;uiverse&nbsp;</StyledSpanAnimation>
    //   <StyledSpanAnimation aria-hidden="true">&nbsp;uiverse&nbsp;</StyledSpanAnimation>
    // </StyledButtonAnimation>
    // <button class="button" data-text="Awesome">
    // <span class="actual-text">&nbsp;uiverse&nbsp;</span>
    // <span aria-hidden="true" class="hover-text">&nbsp;uiverse&nbsp;</span>
    // </button>
}

// const syncPointer = ({ x: pointerX, y: pointerY }) => {
//     const x = pointerX.toFixed(2)
//     const y = pointerY.toFixed(2)
//     const xp = (pointerX / window.innerWidth).toFixed(2)
//     const yp = (pointerY / window.innerHeight).toFixed(2)
//     document.documentElement.style.setProperty('--x', x)
//     document.documentElement.style.setProperty('--xp', xp)
//     document.documentElement.style.setProperty('--y', y)
//     document.documentElement.style.setProperty('--yp', yp)
// }
// document.body.addEventListener('pointermove', syncPointer)