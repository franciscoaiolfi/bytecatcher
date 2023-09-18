'use client'
import { useEffect, useState } from 'react';

interface GeoLocationComponentProps {
  clientIp: string;
}

const GeoLocationComponent: React.FC<GeoLocationComponentProps> = ({ clientIp }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://ipgeolocation.abstractapi.com/v1/?api_key=bb4b0eee5358406898a1bd4bb09bcfaf&ip=${clientIp}`
        );

        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          console.error('Erro ao buscar dados de geolocalização');
        }
      } catch (error) {
        console.error('Erro ao buscar dados de geolocalização', error);
      }
    };

    fetchData();
  }, [clientIp]);

  return (
    <div>
      {data ? (
        <div>
          <h1>Informações de Geolocalização:</h1>
          <p>IP: {data.ip_address}</p>
          <p>Cidade: {data.city}</p>
          <p>Estado: {data.region}</p>
          <p>País: {data.country}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default GeoLocationComponent;