import React from 'react';

const Modal = ({children, onClose}) => {
  return (
    <div>
      <div>{children}</div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
};

export default Modal;
