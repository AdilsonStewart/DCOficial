import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TesteSimples = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✅ TESTE SIMPLES FUNCIONANDO!</Text>
      <Text style={styles.subtext}>Se isso aparecer, o Expo está ok</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A3780',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default TesteSimples;