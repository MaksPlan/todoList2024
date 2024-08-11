import  {  FC, ReactNode } from 'react';

interface IProps {
   children: ReactNode
}

const CreateCardModal:FC<IProps> = ({children}) => {

    return (
    <div>
       {children}
    </div>
    );
};

export default CreateCardModal;