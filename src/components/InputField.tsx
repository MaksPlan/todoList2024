import React, { useState } from 'react';
import ButtonAction from './ButtonAction';

const InputField = () => {
    const [taskNameState, setTaskNameState] = useState<string>('Task Name');
    const [taskDescrpt, setTaskDescrpt] = useState<string>('Description')
    return (
        <div>
 <input autoFocus onChange={
        (e) => setTaskNameState(e.target.value)
} />
        <input onChange={
        (e) => setTaskDescrpt(e.target.value)
}
/>
            <ButtonAction type={'save'} card={{
                name: taskNameState,
                id: Math.random(),
            }} />
        </div>
       
    );
};

export default InputField;