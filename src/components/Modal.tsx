import { FC, ReactNode, useEffect, useState } from "react";
import PortalWrapper, { createContainer } from "./PortalWrapper";

interface IProps {
  children: ReactNode;
}

const Modal:FC<IProps> = ({children}) => {
  const MODAL_CONTAINER_ID = 'modal-container-id';
  const [isMounted, setMounted] = useState(false);

  

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);


    return (
      isMounted
      ? (<PortalWrapper id={MODAL_CONTAINER_ID}>
        <div className="fixed  transition duration-500 delay-75 top-0 left-0  w-full z-10 mx-auto h-lvh flex justify-center">
          <div className="relative w-full  translate-y-[-50px] h-full bg-gray/30  flex shadow-4 items-center">
         {children}
          </div>
          
        </div>
      </PortalWrapper>)
      : null
       
    );
};

export default Modal;