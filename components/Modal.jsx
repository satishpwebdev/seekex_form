import React from "react";

const Modal = ({ isOpen, onClose, onConfirm, title, children }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className="modal-container bg-white w-full max-w-md mx-auto rounded shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        {children}
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={onConfirm}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
