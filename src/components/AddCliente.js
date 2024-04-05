import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ClienteContext } from '../context/ClienteContext'; 

const AddCliente = ({ navigation }) => {
  const { adicionarCliente } = useContext(ClienteContext);

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [plano, setPlano] = useState('');

  const handleAdicionarCliente = () => {
    if (!nome || !idade || !plano) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const novoCliente = {
      id: Date.now(), 
      nome,
      idade,
      plano,
    };

    adicionarCliente(novoCliente); // Chame a função adicionarCliente do contexto

    navigation.navigate('ListaCliente');
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
      <TouchableOpacity style={styles.button} onPress={handleAdicionarCliente}>
        <Text style={styles.buttonText}>Adicionar Cliente</Text>
      </TouchableOpacity>
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

export default AddCliente;
