import React from "react";
import HeroSection from "./herosection/HeroSection";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import AboutMe from "./aboutme/AboutMe";
import Skills from "./skills/Skills";
import S from "./Main.styles";


const Main: React.FC = () => {
  return (
    <S.Main>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Contacts />
    </S.Main>
  );
};


export default Main