import { IData } from '../mock/data';
import cardListSlice, { addToList, useAppDispatch } from '../store/cardListSlice';
import Modal from './Modal';

const ButtonAction = (card: IData) => {
    // const dispatch = useAppDispatch();


    return (
        <button 
        className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  overflow-x-hidden"
          type="button">
          
       
        </button>
    );
};

export default ButtonAction;