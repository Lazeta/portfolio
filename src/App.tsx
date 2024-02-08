import React from 'react';
import { myTheme } from './components/styles/global/MyTheme.styled';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './layouts/Wrapper';
import { Header } from './layouts/header/Header';
import { Navigation } from './components/styles/navigation/Navigation.styled';
import { NavBar } from './components/styles/navigation/NavBar/NavBar.styled';
import { AboutMe } from './layouts/sections/aboutme/AboutMe.styled';
import { Main } from './layouts/sections/Main';
import { Footer } from './layouts/footer/Footer';
import { Projects } from './layouts/sections/projects/Projects.styled';
import { Skills } from './layouts/sections/skills/Skills.styled';
import { Contacts } from './layouts/sections/contacts/Contacts.styled';
import * as HeroSectionStyled from './layouts/sections/herosection/HeroSection.styled';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          <Header>
            <Navigation>
              <NavBar></NavBar>
            </Navigation>
          </Header>

          <Main>
            <HeroSectionStyled.HeroSection>

            </HeroSectionStyled.HeroSection>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Skills></Skills>
            <Contacts></Contacts>
          </Main>

          <Footer>

          </Footer>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
