import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Cadastro = () => {
  const [dados, setDados] = useState({
    nome: '',
    telefone: '',
    dataNascimento: '',
    senha: ''
  });

  const handleCadastro = async (e) => {
    e.preventDefault();
    console.log('Dados para cadastro:', dados);
    alert('Cadastro funcionando! Dados: ' + JSON.stringify(dados));
    // Aqui vamos implementar o Firebase depois
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Nome completo"
          value={dados.nome}
          onChange={(e) => setDados({...dados, nome: e.target.value})}
          style={{ padding: '10px', fontSize: '16px' }}
          required
        />
        
        <input
          type="tel"
          placeholder="Telefone com DDD (ex: 11999999999)"
          value={dados.telefone}
          onChange={(e) => setDados({...dados, telefone: e.target.value})}
          style={{ padding: '10px', fontSize: '16px' }}
          required
        />
        
        <input
          type="date"
          placeholder="Data de nascimento"
          value={dados.dataNascimento}
          onChange={(e) => setDados({...dados, dataNascimento: e.target.value})}
          style={{ padding: '10px', fontSize: '16px' }}
          required
        />
        
        <input
          type="password"
          placeholder="Senha"
          value={dados.senha}
          onChange={(e) => setDados({...dados, senha: e.target.value})}
          style={{ padding: '10px', fontSize: '16px' }}
          required
        />
        
        <button 
          type="submit"
          style={{ 
            padding: '12px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;