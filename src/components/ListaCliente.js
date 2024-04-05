import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ClienteContext } from '../context/ClienteContext'; 

const ListaCliente = ({ navigation }) => {
  const { clientes, removerCliente } = useContext(ClienteContext); // Use o hook useContext para acessar o contexto ClienteContext

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    try {
      // Não é necessário mais carregar os clientes aqui, pois eles são fornecidos pelo contexto
    } catch (error) {
      console.error('Erro ao carregar clientes:', error);
    }
  };

  const handleDeleteCliente = async (id) => {
    try {
      removerCliente(id); // Chame a função removerCliente do contexto
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Lista de Clientes</Text>
      <FlatList
        data={clientes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetalheCliente', { cliente: item })}
            style={styles.clientItem}
          >
            <Text>{item.nome}</Text>
            <TouchableOpacity onPress={() => handleDeleteCliente(item.id)}>
              <Text style={{ color: 'red' }}>Excluir</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clientItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default ListaCliente;
