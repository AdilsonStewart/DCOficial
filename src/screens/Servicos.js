import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';

export default function Servicos({ navigation }) {
  // Função para abrir checkout REAL do Mercado Pago - ÁUDIO
  const abrirPagamentoAudio = async () => {
    try {
      const response = await fetch('/.netlify/functions/mercadopago-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          valor: 1.99,
          usuarioId: 'user-audio', // Vamos ajustar depois
          tipo: "audio"
        })
      });

      const data = await response.json();
      
      if (data.success && data.init_point) {
        Linking.openURL(data.init_point)
          .then(() => {
            console.log('Checkout Áudio aberto!');
          })
          .catch((err) => {
            Alert.alert('Erro', 'Não foi possível abrir o pagamento');
          });
      } else {
        throw new Error('Erro ao criar pagamento áudio');
      }
      
    } catch (error) {
      // FALLBACK: Link direto se a function falhar
      const linkFallback = 'https://mpago.la/1ovRbA6';
      Linking.openURL(linkFallback)
        .then(() => {
          console.log('Fallback áudio aberto!');
        })
        .catch((err) => {
          Alert.alert('Aviso', 'Abra manualmente: ' + linkFallback);
        });
    }
  };

  // Função para abrir checkout REAL do Mercado Pago - VÍDEO
  const abrirPagamentoVideo = async () => {
    try {
      const response = await fetch('/.netlify/functions/mercadopago-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          valor: 1.99,
          usuarioId: 'user-video', // Vamos ajustar depois
          tipo: "video"
        })
      });

      const data = await response.json();
      
      if (data.success && data.init_point) {
        Linking.openURL(data.init_point)
          .then(() => {
            console.log('Checkout Vídeo aberto!');
          })
          .catch((err) => {
            Alert.alert('Erro', 'Não foi possível abrir o pagamento');
          });
      } else {
        throw new Error('Erro ao criar pagamento vídeo');
      }
      
    } catch (error) {
      // FALLBACK: Link direto se a function falhar
      const linkFallback = 'https://mpago.la/1RLYfUB';
      Linking.openURL(linkFallback)
        .then(() => {
          console.log('Fallback vídeo aberto!');
        })
        .catch((err) => {
          Alert.alert('Aviso', 'Abra manualmente: ' + linkFallback);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu Lembrete</Text>
      <Text style={styles.slogan}>Como você quer lembrar?</Text>

      <TouchableOpacity 
        style={[styles.botao, styles.botaoAudio]} 
        onPress={abrirPagamentoAudio}
      >
        <Text style={styles.textoBotao}>🎤 Gravar Áudio - R$ 1,99</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.botao, styles.botaoVideo]} 
        onPress={abrirPagamentoVideo}
      >
        <Text style={styles.textoBotao}>🎥 Gravar Vídeo - R$ 1,99</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, styles.botaoImagem]}>
        <Text style={styles.textoBotao}>📸 Anexar Imagem - Em breve</Text>
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