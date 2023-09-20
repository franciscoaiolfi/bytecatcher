import React, { useState } from 'react';
import axios from 'axios';

function ImageConverter() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event:any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleConversion = () => {
    if (!selectedFile) {
      alert('Selecione um arquivo para conversão.');
      return;
    }

    // Crie um objeto FormData para enviar o arquivo para o backend
    const formData = new FormData();
    formData.append('imageType', 'jpeg'); // Substitua 'jpeg' pelo tipo de imagem correto
    formData.append('image', selectedFile);

    // Realize a solicitação POST para o backend
    axios.post('/converter', formData)
      .then((response) => {
        // Aqui, você pode lidar com a resposta do backend
        // Por exemplo, exibir a imagem convertida ou fazer o download dela
        console.log('Resposta do backend:', response.data);
      })
      .catch((error) => {
        // Lidar com erros, se houver
        console.error('Erro ao enviar solicitação:', error);
      });
  };

  return (
    <div>
      <h2>Conversor de Imagens</h2>
      <div>
        <label htmlFor="imageUpload">Selecione uma imagem:</label>
        <input
          type="file"
          id="imageUpload"
          accept=".jpeg, .jpg, .png" // Defina os tipos de arquivo aceitos
          onChange={handleFileSelect}
        />
      </div>
      <button onClick={handleConversion}>Converter</button>
    </div>
  );
}

export default ImageConverter;
