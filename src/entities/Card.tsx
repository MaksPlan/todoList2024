import { FC } from "react";
import { IData } from "../mock/data";

interface IProps {
    key: number;
    cardData: IData;
}

const Card: FC<IProps> = (key, {cardData}): JSX.Element => {
    return <li className="box-border h-32 w-32">
            <p className="italic bold"> {cardData.name}</p>
        </li>
    
};

export default Card;