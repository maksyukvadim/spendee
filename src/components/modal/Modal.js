import React from 'react';

import './modal.css';

const Modal = ({children, onClose}) => {
  return (
    <div className='modal'>
      <div className='modal__content'>{children}</div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
};

export default Modal;
