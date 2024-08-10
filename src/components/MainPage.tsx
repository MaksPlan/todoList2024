import { useEffect, useState } from "react";
import  data, { IData } from "../mock/data";
import Card from "../entities/Card";
import './main.css';
import ButtonAction from "./ButtonAction";
import Modal from "./Modal";
import CreateCardModal from "../entities/createCardModal";
import FormIWindow from "./FormIWindow";

const MainPage = () => {

    const [cardListState, setCardListState] = useState<IData[] | [] >([])
    const [modalToggler, setModalToggler] = useState<boolean>(false)
  

    useEffect(() => {
        setCardListState(data)
    }, [])

    const modalButtonHandler = () => {
        setModalToggler(!modalToggler)
    }

   const cardList = cardListState.length > 0 ?  cardListState.map((cardData: IData) => {
        return cardData.id ?
        <Card cardData={cardData} />
         : <p>
            'error: cardData is undefiend';
          </p>
    }) : 'Empty List'

         return <div className="mx-auto flex flex-col base-center"
    >
        <div className="pt-10 flex justify-center">
           <ButtonAction name={'create task'} onClick={modalButtonHandler}/> 
        </div>
        {/* Контейнер со списком задач */}
        <div className="container mx-auto flex flex-row flex-wrap h-full">
             { cardList }
        </div>
        
            
          {
            modalToggler && (
                <CreateCardModal>
                     <Modal>
                        <FormIWindow />
                     </Modal>
                </CreateCardModal>
               
            )
          }
          

    </div>


};



export default MainPage;