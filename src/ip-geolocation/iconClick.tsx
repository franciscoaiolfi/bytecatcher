
import React from 'react';
import Image from "next/image";
import "../../styles/styles.css";

const IconClick: React.FC = () => {



    
  const handleButtonClick = () => {
    alert('Botão clicado!');
  };

  return (
    <div className='icon-geolocation-wrapper' onClick={handleButtonClick}>
         <Image
            src="/icons8-marcador-50.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />

    </div>
  );
};

export default IconClick;
