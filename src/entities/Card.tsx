import { IData } from "../mock/data";

const Card = (cardData: IData) => {
    return <div>
        <li>
            <h2> {cardData.name}</h2>
        </li>
    </div>
};

export default Card;