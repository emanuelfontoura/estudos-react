import React from 'react';

const Select = ({ labelText, options, id, name, value, setValue }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      >
        <option value="" disabled>
          Selecione uma cidade
        </option>
        {options.map((opt) => {
          return <option value={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
