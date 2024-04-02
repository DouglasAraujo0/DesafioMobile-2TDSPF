
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddCliente = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [plano, setPlano] = useState('');

  const adicionarCliente = async () => {
    try {
      // Verifica se todos os campos estão preenchidos
      if (!nome || !idade || !plano) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Cria um novo objeto cliente
      const novoCliente = {
        id: Date.now(), // Gera um ID único baseado no timestamp
        nome,
        idade,
        plano,
      };

      // Obtém a lista de clientes existentes
      const clientesData = await AsyncStorage.getItem('clientes');
      let clientes = [];
      if (clientesData !== null) {
        clientes = JSON.parse(clientesData);
      }

      // Adiciona o novo cliente à lista
      clientes.push(novoCliente);

      // Salva a lista atualizada no AsyncStorage
      await AsyncStorage.setItem('clientes', JSON.stringify(clientes));

      // Redireciona para a tela ListaCliente após adicionar o cliente
      navigation.navigate('Lista de Clientes');
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do cliente"
      />
      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite a idade do cliente"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Plano:</Text>
      <TextInput
        style={styles.input}
        value={plano}
        onChangeText={setPlano}
        placeholder="Digite o plano do cliente"
      />
      <Button title="Adicionar Cliente" onPress={adicionarCliente} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddCliente;
