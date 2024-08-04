import { useEffect, useState } from "react";
import PortalWrapper, { createContainer } from "./PortalWrapper";
import InputField from "./InputField";

const Modal = () => {
  const MODAL_CONTAINER_ID = 'modal-container-id';
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);


    return (
      isMounted
      ? (<PortalWrapper id={MODAL_CONTAINER_ID}>
        <div className="fixed  transition duration-500 delay-75 top-0 left-0 object-center  z-10 mx mx-hight flex justify-center">
          <div className="flex  items-center">
          <span>
            Task Name
          </span>
          <InputField />
          </div>
          
        </div>
      </PortalWrapper>)
      : null
       
    );
};

export default Modal;