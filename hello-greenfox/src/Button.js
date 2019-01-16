import React from 'react';

const Button = ({ name, clickEvent }) => {
  return <button name={name} onClick={clickEvent}> { name } </button>
}

export default Button;
