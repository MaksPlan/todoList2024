import { FC } from "react";
import { IData } from "../mock/data";

interface IProps {
    cardData: IData;
}

const Card: FC<IProps> = ({cardData}): JSX.Element => {
    const {name, id} = cardData
    return <li className="box-border h-32 w-32">
            <p className="italic bold"> {name}</p>
        </li>
    
};

export default Card;