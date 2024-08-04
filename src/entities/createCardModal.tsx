import React from 'react';
import InputField from '../components/InputField';

interface IProps {
    show: boolean;
}

const createCardModal = ({show}: IProps) => {


    return (
    <div className=' fixed left-0 top-0 z-[1055] hidden h-full 
    w-full overflow-y-auto overflow-x-hidden outline-none
    '>
        <span>
            create Task
        </span>
        <p>
            Name
        </p>
        <InputField/>
        <p>
            Description
        </p>
        {/* <ButtonAction func={() => createNewTask } name={'create'} /> */}
    </div>
    );
};

export default createCardModal;