import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListaCliente = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    try {
      const clientesData = await AsyncStorage.getItem('clientes');
      if (clientesData !== null) {
        setClientes(JSON.parse(clientesData));
      }
    } catch (error) {
      console.error('Erro ao carregar clientes:', error);
    }
  };

  const deleteCliente = async (id) => {
    try {
      const updatedClientes = clientes.filter(cliente => cliente.id !== id);
      await AsyncStorage.setItem('clientes', JSON.stringify(updatedClientes));
      setClientes(updatedClientes);
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
});

export default ListaCliente;
