import { useState } from 'react';


const useModalToggle = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const toggleModal = () => setModalOpen(!isModalOpen);

    return { isModalOpen, toggleModal };
}


export default useModalToggle;