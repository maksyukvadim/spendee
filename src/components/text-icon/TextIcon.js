import React from "react";

import './text-icon.css';

const TextIcon = ({ icon, name, classIcon }) => {
  return (
    <div className='text-icon__wrap'>
      <i className={`material-icons ${classIcon}`}>{icon}</i>
      <span>{name}</span>
    </div>
  );
};

export default TextIcon;
