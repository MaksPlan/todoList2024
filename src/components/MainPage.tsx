import { useEffect, useState } from "react";
import  data, { IData } from "../mock/data";
import Card from "../entities/Card";
import './main.css';
import Modal from "./Modal";


const MainPage = () => {

    const [cardListState, setCardListState] = useState<IData[] | [] >([])

    useEffect(() => {
        // getCardList ? setCardListState (getCardList) :
        setCardListState(data)
    }, [])

   const cardList = cardListState.length > 0 ?  cardListState.map((cardData: IData) => {
        return cardData.id ?
        <Card cardData={cardData} />
         : <p>
            'error: cardData is undefiend';
          </p>
    }) : 'Empty List'

    return <div className="container mx-auto">
              <h1 className="underline">Hello React</h1>
             { cardList }
              <Modal /> 
              {/* Modal create Task */}
           
              <div>
            
              </div>

    </div>
};

export default MainPage;