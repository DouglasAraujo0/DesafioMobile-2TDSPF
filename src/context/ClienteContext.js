import React, { createContext, useState } from 'react';

const ClienteContext = createContext();

const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  const adicionarCliente = (novoCliente) => {
    setClientes([...clientes, novoCliente]);
  };

  const removerCliente = (id) => {
    const novosClientes = clientes.filter(cliente => cliente.id !== id);
    setClientes(novosClientes);
  };

  return (
    <ClienteContext.Provider value={{ clientes, adicionarCliente, removerCliente }}>
      {children}
    </ClienteContext.Provider>
  );
};

export { ClienteProvider, ClienteContext };
