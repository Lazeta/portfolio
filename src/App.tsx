import { myTheme } from './components/global/MyTheme.styled';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './layouts/Wrapper.styled';
import { Header } from './layouts/header/Header';
import { Main } from './layouts/sections/Main';
import { Footer } from './layouts/footer/Footer';


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
