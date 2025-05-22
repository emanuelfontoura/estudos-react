import React from 'react';

const Input = ({ inputType, labelText, onBlur, value, onChange, error }) => {
  return (
    <div>
      <label>{labelText}</label>
      <input
        type={inputType}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Input;
