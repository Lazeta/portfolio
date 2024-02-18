import styled from "styled-components";

export const StyledButtonAnimation = styled.button`
    :root {
        --x: 0;
        --y: 0;
        --xp: 0;
        --yp: 0;
            --hue: calc(0 + (var(--xp) * 500));
            --bg: hsl(0 0% 10%);
            --size: 100px;
            --glow: radial-gradient(
                50% 50% at center,
                hsl(var(--hue) 80% 85%),
                hsl(var(--hue) 80% 70%),
                transparent
            )
            calc((var(--x) * 1px) - (var(--size) * 0.5))
            calc((var(--y) * 1px) - (var(--size) * 0.5)) / var(--size) var(--size) no-repeat fixed;
    }
`;