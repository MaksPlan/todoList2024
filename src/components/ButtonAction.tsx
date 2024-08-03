import { FC } from 'react';
import { IData } from '../mock/data';
import  { addToList, deleteFromList, useAppDispatch } from '../store/cardListSlice';

interface IButton {
    type: string;
    card: IData;
}

const ButtonAction: FC<IButton> = (type, card) => {
   

    return (
        <button 
        className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  overflow-x-hidden"
          type="button"
        >
              
        </button>
    );

 };

export default ButtonAction;