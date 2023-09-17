"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/styles.css";

export default function CepForm() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    ibge: "",
    numero: "",
  });

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEndereco({ ...endereco, [name]: value });
  };

  const pesquisarCEP = async (valor: string) => {
    const cepLimpo = valor.replace(/\D/g, "");

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
            numero: data.numero,
          });
        } else {
          limparEndereco();
          alert("CEP não encontrado.");
        }
      } catch (err) {
        limparEndereco();
        alert("Ocorreu um erro ao buscar o CEP.");
      }
    } else {
      limparEndereco();
    }
  };

  const limparEndereco = () => {
    setEndereco({
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      ibge: "",
      numero: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pesquisarCEP(cep);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-title-wrapper">
        <h2>Contact Me</h2>
      </div>
      <div className="contat-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="">
            Cep
            <input
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={handleCepChange}
            />
               <button type="submit">Buscar</button>
          </label>
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
          <label>Número:</label>
          <input
            type="text"
            name=""
            value={endereco.numero}
            onChange={handleInputChange}
          />
       
        </form>
      </div>
    </div>
  );
}
