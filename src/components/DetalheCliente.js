import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetalheCliente = ({ route, navigation }) => {
  const { cliente } = route.params;

  const deleteCliente = async () => {
    try {
      const clientesData = await AsyncStorage.getItem('clientes');
      let clientes = [];
      if (clientesData !== null) {
        clientes = JSON.parse(clientesData);
      }

      const updatedClientes = clientes.filter(c => c.id !== cliente.id);

      await AsyncStorage.setItem('clientes', JSON.stringify(updatedClientes));

      navigation.navigate('Lista de Clientes');
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Detalhes do Cliente</Text>
      <Text>Nome: {cliente.nome}</Text>
      <Text>Idade: {cliente.idade}</Text>
      <Text>Plano: {cliente.plano}</Text>
      <Button title="Excluir Cliente" onPress={deleteCliente} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetalheCliente;
