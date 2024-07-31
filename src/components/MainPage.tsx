import { useState } from "react";
import data, { IData } from "../mock/data";
import Card from "../entities/Card";
import './main.css';


const MainPage = () => {

    const [cardListState, setcardListState] = useState<IData[]>(data)


    return <div className="container mx-auto">
              <h1 className="underline">Hello React</h1>

              <div>
               { cardListState.map( (cardData: IData) => <Card key={cardData.card.id} cardData={cardData.card} />)}
              </div>

    </div>
};

export default MainPage;