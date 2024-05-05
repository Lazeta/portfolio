import { useEffect, useContext } from "react";
import ModalContext from "./ModalContext";


const useEscClose = () => {
    const { closeModal, startCloseModal } = useContext(ModalContext);

    useEffect(() => {
        // function handleEscKey now always will be closed form
        const handleEscKey = (event: { keyCode: number }) => {
          if (event.keyCode === 27) startCloseModal()
        }
        document.addEventListener("keydown", handleEscKey);
        return () => document.removeEventListener("keydown", handleEscKey)
    }, [closeModal, startCloseModal] ); // Перерегистрация обработчика при изменении closeModal
}


export default useEscClose;