import type { Container, Engine } from "tsparticles-engine";
import { myTheme } from "../../styles/global/MyTheme.styled";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import Particles from "react-tsparticles";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => { console.log(engine); await loadSlim(engine);}, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: `${myTheme.colors.theme}`,
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        // repulse: {
                        //     distance: 200,
                        //     duration: 4.4,
                        // },
                    },
                },
                particles: {
                    color: {
                        value: `${myTheme.colors.any}`,
                    },
                    links: {
                        color: `${myTheme.colors.secondary}`,
                        distance: 200,
                        enable: true,
                        opacity: 0.2,
                        width: 2,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.2, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};