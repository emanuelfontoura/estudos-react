import React from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../Hooks/useFetch.jsx';
import Error from './Helpers/Error.jsx';
import Loading from './Helpers/Loading.jsx';
import CardBox from './Components/CardBox.jsx';
import styles from './Produtos.module.css';

const Produtos = () => {
  const dataProducts = useFetch();

  React.useEffect(() => {
    dataProducts.fetchData('https://ranekapi.origamid.dev/json/api/produto');
  }, []);

  if (dataProducts.error) return <Error />;
  if (dataProducts.loading) return <Loading />;
  if (dataProducts.data) {
    return (
      <div className={styles.container}>
        {dataProducts.data.map((produto) => {
          return (
            <CardBox>
              <h2>{produto.nome}</h2>
              <img
                className={styles.cardImg}
                src={produto.fotos[0].src}
                alt={produto.fotos[0].titulo}
              />
              <p>R$ {produto.preco}</p>
              <NavLink to={produto.id}>Visualizar</NavLink>
            </CardBox>
          );
        })}
      </div>
    );
  }
};

export default Produtos;
