import {   createContext, ReactNode, useState } from "react";
import Modal from "../components/Modal";
import CreateCardModal from "../entities/createCardModal";

type TModalProps = ReactNode

interface IModalState {
    closeModal: () => void;
}

export  const modalState = createContext<IModalState>({closeModal: () => {}})

export default function useModal(mainComponent: TModalProps) {

    const [isShonw, setIsShonw] = useState<boolean>(false);

    const modalHandler = () => {
        setIsShonw(true)
    }

    function openModal() {

    return   isShonw && 
 
        <CreateCardModal>
            <modalState.Provider value={
                {closeModal}
            }>
            <Modal>
            {mainComponent 
            }
            
            </Modal>
            </modalState.Provider>
       
        </CreateCardModal>

    }

    function closeModal() {
        setIsShonw(false)
    }

    return {openModal, modalHandler, closeModal}

}