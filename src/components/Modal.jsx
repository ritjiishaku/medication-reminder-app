import React from 'react';
import Button from './Button';

const Modal = ({ onClose, children }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative mx-auto">
        <Button
          variant="text"
          className="absolute top-4 right-4 text-neutral-900 hover:text-gray-500"
          onClick={onClose}
        >
          ✕
        </Button>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;