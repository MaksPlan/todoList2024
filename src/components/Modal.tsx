import { useState } from "react";
import InputField from "./InputField";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);


    return (
     
        <div className="flex justify-center items-center">
              <button
       
        onClick={() => setShowModal(!showModal)}
      >
         Show Modal
      </button>
      {showModal && (
       <InputField />
      )}
            
        </div>
    );
};

export default Modal;