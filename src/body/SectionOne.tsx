'use client'
import React, { useEffect, useState } from "react";
import "../../styles/styles.css";
import Image from "next/image";
import CepForm from "@/via-cep/CepForm";
import GeoLocationComponent from "@/ip-geolocation/GeoLocationComponent";
import IconClick from "@/ip-geolocation/iconClick";

const SectionOne: React.FC = () => {
  const [clientIp, setClientIp] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");

        if (response.ok) {
          const data = await response.json();
          setClientIp(data.ip);
        } else {
          console.error("Erro ao buscar o endereço IP");
        }
      } catch (error) {
        console.error("Erro ao buscar o endereço IP", error);
      }
    };

    fetchClientIp();
  }, []);

  return (
    <section className="body__section-container">
      <div>
        <section>
          <div className="body__info-container">
            <div>
              <nav>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
              </nav>
            </div>
            <div>
              <h1> I am Francisco Aiolfi</h1>
              <span>
                Professional web developer with experience in this field​
              </span>
            </div>
            <div>
              <button>My Portfolio</button>
            </div>
          </div>
          <div className="body__image-container">
            <Image
              src=""
              width={450}
              height={650}
              alt="Picture of the author"
            />
          </div>
        </section>
      </div>
      <div>
        <CepForm />
      </div>
      <div>
        {clientIp && <GeoLocationComponent clientIp={clientIp} />}
      </div>
      <IconClick/>
    </section>
  );
};

export default SectionOne;