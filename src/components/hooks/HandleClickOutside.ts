import { useContext, useEffect, useRef } from "react";
import ModalContext from "./ModalContext";


const useCloseOnOutsideClick = () => {
    const { startCloseModal } = useContext(ModalContext);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (formRef.current && !formRef.current.contains(event.target as Node)) startCloseModal();
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [formRef, startCloseModal]);

    return formRef;
}


export default useCloseOnOutsideClick;