import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';

export default function Servicos({ navigation }) {
  // Função para abrir Mercado Pago
  const abrirMercadoPago = () => {
  // Link SIMPLES que sempre funciona - página inicial do Mercado Pago
  const urlSimples = 'https://www.mercadopago.com.br';
  
  Linking.openURL(urlSimples)
    .then(() => {
      console.log('Mercado Pago aberto!');
    })
    .catch((err) => {
      Alert.alert('Aviso', 'Abra manualmente: mercadopago.com.br');
      console.error('Erro:', err);
    });
};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu Lembrete</Text>
      <Text style={styles.slogan}>Como você quer lembrar?</Text>

      <TouchableOpacity 
        style={[styles.botao, styles.botaoAudio]} 
        onPress={abrirMercadoPago}
      >
        <Text style={styles.textoBotao}>🎤 Gravar Áudio - R$ 9,90</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoVideo]}>
        <Text style={styles.textoBotao}>🎥 Gravar Vídeo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoImagem]}>
        <Text style={styles.textoBotao}>📸 Anexar Imagem</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.voltarText}>← Voltar para Início</Text>
      </TouchableOpacity>
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
  botao: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  botaoAudio: {
    backgroundColor: '#00B894',
  },
  botaoVideo: {
    backgroundColor: '#E17055',
  },
  botaoImagem: {
    backgroundColor: '#FD79A8',
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