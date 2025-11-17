import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Cadastro = ({ navigation }) => {
  console.log('🎯 TelaCadastro COM FIREBASE carregada!');

  // Estados do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = async () => {
    console.log('📝 Tentando cadastrar usuário...');

    // Validações
    if (!nome || !email || !senha || !confirmarSenha || !dia || !mes || !ano) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setCarregando(true);

    try {
      console.log('🔥 Criando usuário no Firebase Auth...');
      
      // 1. Criar usuário no Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      
      console.log('✅ Usuário criado no Auth:', user.uid);

      // 2. Salvar dados adicionais no Firestore
      console.log('💾 Salvando dados no Firestore...');
      
      const dataNascimento = `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
      
      await addDoc(collection(db, 'usuarios'), {
        uid: user.uid,
        nome: nome,
        email: email,
        dataNascimento: dataNascimento,
        dataCadastro: serverTimestamp(),
      });

      console.log('✅ Dados salvos no Firestore!');

      Alert.alert(
        '🎉 Sucesso!', 
        'Cadastro realizado com sucesso!',
        [{ text: 'OK', onPress: () => navigation.navigate('Inicio') }]
      );

    } catch (error) {
      console.error('❌ Erro no cadastro:', error);
      
      let mensagemErro = 'Erro ao cadastrar: ';
      switch (error.code) {
        case 'auth/email-already-in-use':
          mensagemErro += 'Este email já está em uso.';
          break;
        case 'auth/invalid-email':
          mensagemErro += 'Email inválido.';
          break;
        case 'auth/weak-password':
          mensagemErro += 'Senha muito fraca.';
          break;
        default:
          mensagemErro += error.message;
      }
      
      Alert.alert('Erro', mensagemErro);
    } finally {
      setCarregando(false);
    }
  };

  const handleVoltar = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      
      {/* MASCOTE ORFEU */}
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
          value={nome}
          onChangeText={setNome}
        />
        
        {/* DATA DE NASCIMENTO */}
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
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <TouchableOpacity 
          style={[styles.botao, carregando && styles.botaoDesabilitado]} 
          onPress={handleCadastro}
          disabled={carregando}
        >
          <Text style={styles.textoBotao}>
            {carregando ? 'CADASTRANDO...' : 'Cadastrar'}
          </Text>
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
  botaoDesabilitado: {
    backgroundColor: '#CCCCCC',
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

export default Cadastro;