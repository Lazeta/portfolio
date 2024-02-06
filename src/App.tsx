import React from 'react';
import { myTheme } from './components/styles/global/MyTheme.styled';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './components/styles/Wrapper.styled';
import { Header } from './components/layout/header/Header.styled';
import { Navigation } from './components/layout/header/navigation/Navigation.styled';
import { NavBar } from './components/layout/header/navigation/NavBar/NavBar.styled';
import { AboutMe } from './components/layout/main/aboutme/AboutMe.styled';
import { Main } from './components/layout/main/Main.styled';
import { Footer } from './components/layout/footer/Footer.styled';
import { Projects } from './components/layout/main/projects/Projects.styled';
import { Skills } from './components/layout/main/skills/Skills.styled';
import { Contacts } from './components/layout/main/contacts/Contacts.styled';
import * as HeroSectionStyled from './components/layout/main/herosection/HeroSection.styled';


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
