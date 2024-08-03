import { useEffect, useState } from "react";
import  data, { IData } from "../mock/data";
import Card from "../entities/Card";
import './main.css';
import { getCardList } from "../store/cardListSlice";
import Modal from "./Modal";
import ButtonAction from "./ButtonAction";


const MainPage = () => {

    const [cardListState, setCardListState] = useState<IData[] | [] >([])

    useEffect(() => {
        // getCardList ? setCardListState (getCardList) :
        setCardListState(data)
    }, [])

    return <div className="container mx-auto">
              <h1 className="underline">Hello React</h1>
              <Modal/>
              {/* Only adding button */}
              {/* <ButtonAction name={""} id={0} />  */}
              <div>
               {
                cardListState.map((cardData: IData) => {
                    return cardData.id ?
                    <Card cardData={cardData} />
                     : <p>
                        'error: cardData is undefiend';
                      </p>
                }
        
            )
               }
              </div>

    </div>
};

export default MainPage;