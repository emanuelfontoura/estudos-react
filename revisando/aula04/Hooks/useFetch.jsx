import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (url, options) => {
    let data;
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(url, options);
      data = await response.json();
      if (data) setData(data);
    } catch (err) {
      data = null;
      setError('Houve um erro ao carregar os dados.');
    } finally {
      setLoading(false);
      setData(data);
    }
  };

  return { data, error, loading, fetchData };
};

export default useFetch;
