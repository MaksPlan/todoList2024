import  { FC, useState } from 'react';

interface IProps {
    name: string;
}

const InputField:FC<IProps> = ({name}) => {
    const [taskNameState, setTaskNameState] = useState<string>('Task Name');
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