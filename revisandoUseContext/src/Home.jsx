import React from 'react';
import { UserContext } from '../useContext';

const Home = () => {
  const useContext = React.useContext(UserContext);

  return (
    <div>
      <h1>{useContext.contar}</h1>
    </div>
  );
};

export default Home;
