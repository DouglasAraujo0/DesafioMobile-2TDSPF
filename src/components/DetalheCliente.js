import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ClienteContext } from '../context/ClienteContext'; 

const DetalheCliente = ({ route, navigation }) => {
  const { cliente } = route.params;
  const { removerCliente } = useContext(ClienteContext); // Use o hook useContext para acessar o contexto ClienteContext

  const handleDeleteCliente = async () => {
    try {
      removerCliente(cliente.id); // Chame a função removerCliente do contexto
      navigation.navigate('ListaCliente');
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
      <Button title="Excluir Cliente" onPress={handleDeleteCliente} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default DetalheCliente;
