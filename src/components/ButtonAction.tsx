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
        font-bold px-6 py-3 rounded shadow-10 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  
        hover:bg-activeBlue
        overflow-x-hidden
        w-max
        "
          type="button"
          onClick={onClick}
        >
              {name}
        </button>
    );

 };

export default ButtonAction;