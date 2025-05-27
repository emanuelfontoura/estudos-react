import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Error from './Helpers/Error';
import Loading from './Helpers/Loading';

const Produto = () => {
  const params = useParams();
  const dataProducts = useFetch();

  React.useEffect(() => {
    dataProducts.fetchData(
      `https://ranekapi.origamid.dev/json/api/produto/${params.id}`,
    );
  }, []);

  console.log(params.id);
  console.log(dataProducts.data);

  if (dataProducts.loading) return <Loading />;
  if (dataProducts.error) return <Error />;
  if (dataProducts.data === null) return null;
  return (
    <div>
      <h1>Produto: {dataProducts.data.nome}</h1>
      <h2>{dataProducts.data.descricao}</h2>
      <p>{dataProducts.data.preco}</p>
      <p>{dataProducts.data.vendido ? 'DISPONÍVEL' : 'VENDIDO'}</p>
      <NavLink to="editar">Editar</NavLink>
    </div>
  );
};

export default Produto;
