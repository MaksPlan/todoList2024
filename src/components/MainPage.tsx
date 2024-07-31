import { useState } from "react";
import data, { IData } from "../mock/data";
import Card from "../entities/Card";

const MainPage = () => {

    const [cardListState, setcardListState] = useState<IData[]>(data)
    return <div>
              <h1 className="italic bold underline">Hello React</h1>

              <div>
               { cardListState.map( (card) =>   <Card cardData={card}/>)}
              </div>

    </div>
};

export default MainPage;