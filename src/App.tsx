import { myTheme } from './components/global/MyTheme.styled';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './layout/Wrapper.styled';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/Main';
import { Footer } from './layout/footer/Footer';


const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          <Header/>
          <Main/>
          <Footer/>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
