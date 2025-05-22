import React from 'react';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          'https://ranekapi.origamid.dev/json/api/produto',
        );
        const data = await response.json();
        if (data) setProdutos(data);
      } catch (err) {
        setError(
          'Não foi possível carregar os produtos. Tente novamente! ' + err,
        );
      }
    };
    fetchProdutos();
  }, []);

  return (
    <div>
      {produtos.map((produto) => {
        return (
          <>
            <div>
              <h2>{produto.nome}</h2>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Produtos;
