import React from "react";

type ModalContextType = {
  modalOpen: string | null,
  isClosing: boolean,
  openModal: (modalId: string) => void,
  startCloseModal: () => void,
  closeModal: () => void,
}

// Пустое значение, которое будет использоваться до тех пор, пока контекст не будет инициализирован в App
const defaultModalContext: ModalContextType = {
  modalOpen: null,
  isClosing: false,
  openModal: () => {},
  startCloseModal: () => {},
  closeModal: () => {},
};


const ModalContext = React.createContext<ModalContextType>(defaultModalContext);

export default ModalContext;