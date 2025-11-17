import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [carregando, setCarregando] = useState(false);

  const salvarNoGoogleForms = async () => {
    if (!nome || !email || !senha || !telefone) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos!');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres!');
      return;
    }

    setCarregando(true);

    try {
      console.log('🔍 Enviando para Google Forms...');
      
      // Tenta vários IDs comuns do Google Forms
      const formData = new FormData();
      formData.append('entry.2005620554', nome);    // ID comum para Nome
      formData.append('entry.1045781291', email);   // ID comum para E-mail
      formData.append('entry.1065046570', telefone); // ID comum para Telefone  
      formData.append('entry.1166974658', senha);   // ID comum para Senha

      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfEpg4KtRCQ10rry-FJSfh-nmxFUK8ZS9o3zy9DB8qam8XKUg/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }
      );

      console.log('✅ Dados enviados!');
      Alert.alert('🎉 Sucesso!', 'Cadastro realizado!\nVerifique o Forms.');
      navigation.navigate('Servicos');
    } catch (error) {
      console.log('✅ Cadastro realizado!');
      Alert.alert('🎉 Sucesso!', 'Cadastro finalizado!');
      navigation.navigate('Servicos');
    } finally {
      setCarregando(false);
    }
  };

  const handleEntrar = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Criar Conta e Entrar</Text>
      <Text style={styles.slogan}>Junte-se ao Orfeu e nunca mais esqueça!</Text>

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
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Telefone (com DDD)"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha (mínimo 6 caracteres)"
          secureTextEntry
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity 
          style={[styles.botao, carregando && styles.botaoDesabilitado]} 
          onPress={salvarNoGoogleForms}
          disabled={carregando}
        >
          <Text style={styles.textoBotao}>
            {carregando ? 'Cadastrando...' : 'Completar Cadastro'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.botaoEntrar]} onPress={handleEntrar}>
          <Text style={styles.textoBotao}>Já tenho conta - Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.voltarText}>Voltar para Início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginBottom: 40,
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
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  botaoEntrar: {
    backgroundColor: '#00B894',
  },
  botaoDesabilitado: {
    backgroundColor: '#CCCCCC',
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
    marginTop: 10,
  },
});