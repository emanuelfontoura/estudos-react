import React from 'react';

const validationTypes = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Invalid CEP',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Invalid email',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value_) {
    if (value_.length === 0) {
      setError('Fill in a value');
      return false;
    } else if (!validationTypes[type].regex.test(value_)) {
      setError('Please fill in a valid value');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function onBlur({ target }) {
    validate(target.value);
  }

  return { value, setValue, error, setError, validate, onChange, onBlur };
};

export default useForm;
