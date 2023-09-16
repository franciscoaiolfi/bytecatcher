'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CepForm() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    ibge: '',
  });

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEndereco({ ...endereco, [name]: value });
  };

  const pesquisarCEP = async (valor: string) => {
    const cepLimpo = valor.replace(/\D/g, '');

    if (cepLimpo.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cepLimpo}/json/`
        );
        const data = response.data;

        if (!data.erro) {
          setEndereco({
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
            ibge: data.ibge,
          });
        } else {
          limparEndereco();
          alert('CEP não encontrado.');
        }
      } catch (err) {
        limparEndereco();
        alert('Ocorreu um erro ao buscar o CEP.');
      }
    } else {
      limparEndereco();
    }
  };

  const limparEndereco = () => {
    setEndereco({
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
      ibge: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pesquisarCEP(cep);
  };

  return (
    <div>
      <h2>Buscar Endereço por CEP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={handleCepChange}
        />
        <button type="submit">Buscar</button>
      </form>
      <label>Rua:</label>
      <input
        type="text"
        name="rua"
        value={endereco.rua}
        onChange={handleInputChange}
      />
      <label>Bairro:</label>
      <input
        type="text"
        name="bairro"
        value={endereco.bairro}
        onChange={handleInputChange}
      />
      <label>Cidade:</label>
      <input
        type="text"
        name="cidade"
        value={endereco.cidade}
        onChange={handleInputChange}
      />
      <label>Estado:</label>
      <input
        type="text"
        name="estado"
        value={endereco.estado}
        onChange={handleInputChange}
      />
      <label>IBGE:</label>
      <input
        type="text"
        name="ibge"
        value={endereco.ibge}
        onChange={handleInputChange}
      />
    </div>
  );
}
