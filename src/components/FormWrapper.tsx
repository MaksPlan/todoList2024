import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const FormWrapper:FC<IProps> = ({children}) => {
    return (
        <div className="container bg-cgray flex bg-gray  flex-col mx-auto  w-1/2" >
            {children}
        </div>
    );
};

export default FormWrapper;