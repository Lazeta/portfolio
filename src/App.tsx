import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import Particle from "./components/particle/Particle";
import ModalContext from "./components/hooks/ModalContext";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Main from "./layout/sections/Main";
import myTheme from "./styles/global/MyTheme.styled";
import Wrapper from "./layout/Wrapper.styled";


const App = () => {
  const [modalOpen, setModalOpen] = useState<string | null>(null);
  const [isClosing, setIsClosing] = React.useState(false);
  

  const openModal = (modalId: string) => {
    setModalOpen(modalId);
  };

  const closeModal = () => {
    setIsClosing(false);
    setModalOpen(null);
  }

  const startCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => closeModal(), 700)
  }

  const contextValue = {
    modalOpen, isClosing, openModal, startCloseModal, closeModal 
  };

  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <ModalContext.Provider value={contextValue}>
          <Wrapper>
            <Particle />
            <Header />
            <Main />
            <Footer />
          </Wrapper>
        </ModalContext.Provider>
      </ThemeProvider>
    </div>
  );
};


export default App;