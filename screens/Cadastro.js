import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'; 
 
const Cadastro = ({ navigation }) =
  const [nome, setNome] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [senha, setSenha] = useState(''); 
  const [telefone, setTelefone] = useState(''); 
 
  const handleCadastro = () =
    if (!nome || !email || !senha) { 
      alert('Por favor, preencha todos os campos!'); 
      return; 
    } 
 
    if (senha.length < 6) { 
      alert('A senha deve ter pelo menos 6 caracteres!'); 
      return; 
    } 
 
    alert('Cadastro realizado! Nome: ' + nome + ' Email: ' + email); 
    navigation.navigate('Inicio'); 
  }; 
 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.titulo}>Criar Conta</Text> 
      <Text style={styles.slogan}>Junte-se ao Orfeu e nunca mais esque‡a!</Text> 
 
      <View style={styles.formContainer}> 
        <TextInput 
          style={styles.input} 
          placeholder="Nome completo" 
          value={nome} 
          onChangeText={setNome} 
        /> 
 
        <TextInput 
          style={styles.input} 
          placeholder="E-mail" 
          keyboardType="email-address" 
          value={email} 
          onChangeText={setEmail} 
        /> 
 
        <TextInput 
          style={styles.input} 
          placeholder="Telefone (opcional)" 
          keyboardType="phone-pad" 
          value={telefone} 
          onChangeText={setTelefone} 
        /> 
 
        <TextInput 
          style={styles.input} 
          placeholder="Senha (m¡nimo 6 caracteres)" 
          secureTextEntry 
          value={senha} 
          onChangeText={setSenha} 
        /> 
 
        <TouchableOpacity style={styles.botao} onPress={handleCadastro}> 
          <Text style={styles.textoBotao}>Completar Cadastro</Text> 
        </TouchableOpacity> 
 
        <TouchableOpacity onPress={() =
          <Text style={styles.voltarText}>Voltar para In¡cio</Text> 
        </TouchableOpacity> 
      </View> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    padding: 20, 
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
    width: '100%', 
    maxWidth: 400, 
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
  voltarText: { 
    color: '#6C5CE7', 
    fontSize: 16, 
    fontWeight: '500', 
    textAlign: 'center', 
  }, 
}); 
 
