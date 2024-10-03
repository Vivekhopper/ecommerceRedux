import React from "react";

function Modal({ isModelOpen, setModelOpen, children }) {
  if (!isModelOpen) return null; // Modal only appears if isModelOpen is true

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg relative">
        
        {/* Close button in the top right corner */}
        <button
          onClick={() => setModelOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          &times;
        </button>

        {/* Modal body (content) */}
        <div className="text-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
