import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.naoEsqueca}>Não Esqueça Mais:</Text>
      
      <View style={styles.mascoteContainer}>
        <Image 
          source={{ uri: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTg0cXptZ2t1a3QxNTczY25xbzJ5bDA2MXFuMnRocWNzdXZvMHB0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XpfXuBYtvR9I8jjBH0/giphy.gif' }}
          style={styles.mascoteImage}
        />
      </View>
      
      <Text style={styles.titulo}>DeixaComigo</Text>
      <Text style={styles.slogan}>Lembrou agora?{'\n'}Programe o parabéns!</Text>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textoBotao}>Criar Meu Lembrete</Text>
      </TouchableOpacity>

      <Text style={styles.textoPequeno}>
        Sua voz, na hora certa.{'\n'}Todo mundo acha que você nunca esquece.
      </Text>
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
  naoEsqueca: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A3780',
    marginBottom: 10,
    textAlign: 'center',
  },
  mascoteContainer: {
    alignItems: 'center',
    marginBottom: 30,
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
    marginBottom: 40,
    lineHeight: 24,
  },
  botao: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  textoPequeno: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
    fontStyle: 'italic',
    marginTop: 20,
  },
});