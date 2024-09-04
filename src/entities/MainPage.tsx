import {  useEffect, useState } from "react";
import   data, { IData } from "../mock/data";
import Card from "./Card";
import ButtonAction from "../components/ButtonAction";
import Modal from "../components/Modal";
import CreateCardModal from "./createCardModal";
import FormIWindow from "../components/FormIWindow";
import { addFetchData, getCardList, TCardListState, useAppDispatch, useAppSelector } from "../store/cardListSlice";
import '.././layout/main.css'
import SearchTask from "../components/SearchTask";
import useModal from "../hooks/useModal";

const MainPage = () => {

    const [cardListState, setCardListState] = useState<IData[] | [] | TCardListState >([])
    const [modalToggler, setModalToggler] = useState<boolean>(false)
   const reduxCardState = useAppSelector(getCardList);
   const dispatch = useAppDispatch()
//    использую кастомный хук для модалки
const {openModal, modalHandler, closeModal} = useModal(<FormIWindow  />)

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
        // fetchTodos()
        dispatch(addFetchData(data))
    } catch (error) {
        throw {'Error connecting ': error}
    }
     
   }, [])
   

    useEffect(() => {
        // console.log(reduxCardState, typeof reduxCardState)
     getCardList.length > 0 ?   setCardListState(reduxCardState) : setCardListState(cardListState)

    }, [modalToggler, reduxCardState])

    

    function modalButtonHandler() {
        setModalToggler(!modalToggler)
    }

   const cardList = cardListState.length > 0 ?  cardListState.map((cardData: IData) => {
        return cardData.id ?
        <Card key={cardData.id} cardData={cardData} />
         : <p>
            'error: cardData is undefiend';
          </p>
    }) : 'Empty List'

         return <div className="mx-auto flex flex-col base-center"
    >
        <div className="pt-10 flex justify-center">
            <SearchTask search={setCardListState}/>
           <ButtonAction name={'create task'} onClick={modalHandler}/> 
        </div>
        {/* Контейнер со списком задач */}
        <div className="container mx-auto flex flex-col  h-full">
             { cardList }
        </div>
        
            
          { openModal()
          }
          

    </div>


};



export default MainPage;