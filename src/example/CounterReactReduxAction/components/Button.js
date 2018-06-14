import React from 'react';

const Button = ({ clickHandler, children }) => (
  <button onClick={clickHandler}>{children}</button>
);
export default Button;
