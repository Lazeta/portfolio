import ModalContext from "./components/hooks/ModalContext";
import { Particle } from "./components/particle/Particle";
import { myTheme } from "./styles/global/MyTheme.styled";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./layout/Wrapper.styled";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Main } from "./layout/sections/Main";
import { useState } from "react";
import React from "react";

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