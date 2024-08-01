import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);


    return (
     
        <div className="flex justify-center items-center">
              <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  overflow-x-hidden"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Fill Details
      </button>
      {showModal && (
        <p>
          Show Modal
        </p>
      )}
            
        </div>
    );
};

export default Modal;