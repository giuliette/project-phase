import React from 'react';

const Buttons = ({ name, onClick }) => {
  return <button name={name} onClick={onClick}>{name}</button>
}

export default Buttons;
