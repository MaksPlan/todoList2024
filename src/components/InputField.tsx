import  { FC, useEffect, useState } from 'react';
import { IData } from '../mock/data';

interface IProps {
    name: string;
    setImputData: (e:IData | null) => void;
}

// setInputData: inputHandler меняет стейт верхнего компонента FormWindow (принимает состояние карточки)
const InputField:FC<IProps> = ({name, setImputData}) => {
    const [taskNameState, setTaskNameState] = useState<string>('Task Name');
    useEffect(() => {
        setImputData({
            name: taskNameState,
            id: Math.random()
        })
    }, [taskNameState])

    return (
        <div className='flex flex-col justify-between space-10 pb-5'>
             <span className='pb-3'>
           {name}
          </span>

 <input autoFocus onChange={
    (e) => setTaskNameState(e.target.value)
        
} />

      
        </div>
       
    );
};

export default InputField;