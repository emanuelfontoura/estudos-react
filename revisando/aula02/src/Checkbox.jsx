import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((opt) => opt !== target.value));
    }
  }

  function handleChecked(option) {
    return value.includes(option);
  }

  return (
    <div>
      {options.map((opt, index) => {
        return (
          <div key={index}>
            <label>{opt}</label>
            <input
              type="checkbox"
              onChange={handleChange}
              checked={handleChecked(opt)}
              value={opt}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Checkbox;
