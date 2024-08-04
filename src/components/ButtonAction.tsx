import {  FC, } from 'react';
// import { IData } from '../mock/data';

interface IButton {
    name: string;
    onClick: () => void;
}



const ButtonAction: FC<IButton> = ({ name, onClick}) => {
   

    return (
       <button 
        className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  overflow-x-hidden"
          type="button"
          onClick={onClick}
        >
              {name}
        </button>
    );

 };

export default ButtonAction;