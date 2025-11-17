import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const TelaCadastro = ({ navigation }) => {
  console.log('✅ TelaCadastro carregada!');

  // Estados para a data de nascimento
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  const handleCadastro = () => {
    console.log('📝 Botão Cadastrar pressionado!');
    console.log('📅 Data de Nascimento:', `${dia}/${mes}/${ano}`);
    alert('Cadastro em desenvolvimento! 🦉');
  };

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* MASCOTE ORFEU - MESMO GIF */}
      <View style={styles.mascoteContainer}>
        <Image 
          source={{ uri: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTg0cXptZ2t1a3QxNTczY25xbzJ5bDA2MXFuMnRocWNzdXZvMHB0aSZlcD12MV9pbnRlcm5aLF9naWZfYnlfaWQmY3Q9cw/XpfXuBYtvR9I8jjBH0/giphy.gif' }}
          style={styles.mascoteImage}
        />
      </View>
      
      <Text style={styles.titulo}>Criar Conta</Text>
      
      <Text style={styles.slogan}>
        Junte-se ao Orfeu{'\n'}
        e nunca mais esqueça!
      </Text>

      {/* FORMULÁRIO */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#999"
        />
        
        {/* DATA DE NASCIMENTO - DIA/MÊS/ANO */}
        <Text style={styles.label}>Data de Nascimento</Text>
        <View style={styles.dataContainer}>
          <TextInput
            style={[styles.inputData, styles.dia]}
            placeholder="DD"
            placeholderTextColor="#999"
            keyboardType="numeric"
            maxLength={2}
            value={dia}
            onChangeText={setDia}
          />
          <Text style={styles.barra}>/</Text>
          <TextInput
            style={[styles.inputData, styles.mes]}
            placeholder="MM"
            placeholderTextColor="#999"
            keyboardType="numeric"
            maxLength={2}
            value={mes}
            onChangeText={setMes}
          />
          <Text style={styles.barra}>/</Text>
          <TextInput
            style={[styles.inputData, styles.ano]}
            placeholder="AAAA"
            placeholderTextColor="#999"
            keyboardType="numeric"
            maxLength={4}
            value={ano}
            onChangeText={setAno}
          />
        </View>
        
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.voltarButton} onPress={handleVoltar}>
          <Text style={styles.voltarText}>← Voltar para Login</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mascoteContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  mascoteImage: {
    width: 120,
    height: 120,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4A3780',
    marginBottom: 10,
    textAlign: 'center',
  },
  slogan: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  formContainer: {
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    fontSize: 16,
    color: '#333',
  },
  // ESTILOS PARA DATA DE NASCIMENTO
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputData: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  dia: {
    width: 60,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  mes: {
    width: 60,
    borderRadius: 0,
  },
  ano: {
    width: 80,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  barra: {
    fontSize: 18,
    color: '#666',
    marginHorizontal: 8,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 16,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  voltarButton: {
    alignItems: 'center',
    padding: 10,
  },
  voltarText: {
    color: '#6C5CE7',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TelaCadastro;