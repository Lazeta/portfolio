import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/global/MyTheme.styled';
import { Wrapper } from './layout/Wrapper.styled';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/Main';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          <Particle/>
          <Header/>
          <Main/>
          <Footer/>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App