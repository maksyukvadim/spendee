import React from 'react';

const Button = ({ text, onPress, children }) => {
  return (
    <button onClick={onPress}>
      {children}
      {text}
    </button>
  );
};

export default Button;
