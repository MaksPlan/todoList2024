import {  createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import Modal from "../components/Modal";
import CreateCardModal from "../entities/createCardModal";
import ButtonAction from "../components/ButtonAction";

type TModalProps = ReactNode

interface IModalState {
    closeModal: () => void;
}

export  const modalState = createContext<IModalState>({closeModal: () => {}})

export default function useModal(mainComponent: TModalProps) {

    const [isShonw, setIsShonw] = useState<boolean>(false);

function createModal() {
    return   isShonw && <CreateCardModal>
    <modalState.Provider value={
        {closeModal}
    }>
    <Modal>
    {/* создать фукнцию которая будет открывать модалку и вставлять сюда чилдрен компонет */}
  {mainComponent}
    <ButtonAction name={"close"} onClick={closeModal}/>
    </Modal>
    </modalState.Provider>

</CreateCardModal>
}

    function openModal() {
    setIsShonw(true)
   
    

    }

    function closeModal() {
        setIsShonw(false)
    }

    return {createModal, openModal, closeModal}

}