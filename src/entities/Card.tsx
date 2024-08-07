import { FC } from "react";
import { IData } from "../mock/data";

interface IProps {
    cardData: IData;
}

const Card: FC<IProps> = ({cardData}): JSX.Element => {
    const {name, id} = cardData
    return <div className="
    box-border
     bg-activeBlue
    scale-50 hover:scale-75 ease-in duration-500
      " >
         <li key={id}>
            <p className="italic bold"> {name}</p>
        </li>
    </div>
       
    
};

export default Card;