import {  useEffect, useState } from "react";
import   { IData } from "../mock/data";
import Card from "../entities/Card";
import './main.css';
import ButtonAction from "./ButtonAction";
import Modal from "./Modal";
import CreateCardModal from "../entities/createCardModal";
import FormIWindow from "./FormIWindow";
import { addFetchData, getCardList, TCardListState, useAppDispatch, useAppSelector } from "../store/cardListSlice";

const MainPage = () => {

    const [cardListState, setCardListState] = useState<IData[] | [] | TCardListState >([])
    const [modalToggler, setModalToggler] = useState<boolean>(false)
   const reduxCardState = useAppSelector(getCardList);
   const dispatch = useAppDispatch()

   const fetchTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    let dataTodos: IData[] = []
       await fetch(url).then(response => response.json())
        .then((data) => {
            dataTodos = [...data]
        })
        setCardListState(dataTodos);
        dispatch(addFetchData(dataTodos))
   };

   useEffect(() => {
    try {
        fetchTodos()
    } catch (error) {
        throw {'Error connecting ': error}
    }
     
   }, [])
   

    useEffect(() => {
        // console.log(reduxCardState, typeof reduxCardState)
     getCardList.length > 0 ?   setCardListState(reduxCardState) : setCardListState(cardListState)

    }, [modalToggler, reduxCardState])

    

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
                        <FormIWindow onClick={modalButtonHandler} />
                    </Modal>
                </CreateCardModal>          
            )
          }
          

    </div>


};



export default MainPage;