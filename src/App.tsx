import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './components/styles/global/MyTheme.styled';
import { Wrapper } from './components/styles/Wrapper.styled';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <Wrapper>
          
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
