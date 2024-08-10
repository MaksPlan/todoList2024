import  { FC, ReactNode } from 'react';

interface IProps {
   children: ReactNode
}

const CreateCardModal:FC<IProps> = ({children}) => {


    return (
    <div 
   //  className=' fixed left-0 top-0 z-[1055] hidden h-full 
   //  w-full overflow-y-auto overflow-x-hidden outline-none
   //  '
    >
       {children}
    </div>
    );
};

export default CreateCardModal;