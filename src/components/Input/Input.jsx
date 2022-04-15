import './index.css';

import React from 'react';

export default function Input(props) {
  const { label, type, placeholder, name, changeInput, value } = props;
  return (
    <div className='row'>
      <label className='label' htmlFor=''>
        {label}
      </label>
      <input
        className='input'
        type={type}
        name={name}
        placeholder={placeholder}
        required
        onChange={changeInput}
        value={value}
      />
    </div>
  );
}
