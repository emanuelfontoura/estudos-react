import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionarDois() {
    setContar((contar) => contar + 2);
  }

  return (
    <UserContext.Provider value={{ nome: 'Emnauel', contar, adicionarDois }}>
      {children}
    </UserContext.Provider>
  );
};
