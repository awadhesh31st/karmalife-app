import { FaTimes } from "react-icons/fa";
import React from "react";

interface ModalProps {
   onClose: () => void;
   children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
   return (
      <div className="ease-out duration-700 fixed w-full h-full top-0 left-0 flex items-center justify-center">
         <div className="modal-overlay absolute w-full h-full bg-coal opacity-90"></div>
         <div className="modal-container bg-charcoal w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto px-8 py-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-semiBold">Find IFSC code</h2>
               <div className="cursor-pointer" onClick={onClose}>
                  <FaTimes />
               </div>
            </div>
            <div>{children}</div>
         </div>
      </div>
   );
};

export default Modal;
