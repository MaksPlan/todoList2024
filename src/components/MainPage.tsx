import { useEffect, useState } from "react";
import  data, { IData } from "../mock/data";
import Card from "../entities/Card";
import './main.css';
import ButtonAction from "./ButtonAction";
import Modal from "./Modal";

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

         return <div className="container mx-auto 
    flex flex-col flex-wrap list-none gap-4 
    ">
        <ButtonAction name={'create task'} onClick={modalButtonHandler}/>
             { cardList }
          {
            modalToggler && (
                <Modal/>
            )
          }
          

    </div>


};



export default MainPage;