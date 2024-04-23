import React from "react";

type ModalContextType = {
    modalOpen: string | null,
    openModal: (modalId: string) => void,
    closeModal: () => void,
}

// Пустое значение, которое будет использоваться до тех пор, пока контекст не будет инициализирован в App
const defaultModalContext: ModalContextType = {
    modalOpen: null,
    openModal: () => {},
    closeModal: () => {},
  };

const ModalContext = React.createContext<ModalContextType>(defaultModalContext);

export default ModalContext;