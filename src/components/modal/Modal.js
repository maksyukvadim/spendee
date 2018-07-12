import React from 'react';

import './modal.css';

const Modal = ({children, onClose, classNames}) => {
  return (
    <div className={`modal ${classNames}`}>
      <div className='modal__content'>{children}</div>
      <div className="backdrop" onClick={onClose} />
    </div>
  );
};

export default Modal;
