import React from "react";
import Image from "next/image";
import "../../styles/styles.css";

const FooterComponent: React.FC = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-top-row">
          <div>
            <h2>Mantenha-se conectado através de nossas redes sociais</h2>
          </div>
          <div>
            <nav className="footer-social-media-nav">
              <a href="">
                <Image
                  src="/icons8-facebook.svg"
                  width={32}
                  height={32}
                  alt="Facebook Icon"
                />
              </a>
              <a href="">
                <Image
                  src="/icons8-github.svg"
                  width={32}
                  height={32}
                  alt="Github Icon"
                />
              </a>
              <a href="">
                <Image
                  src="/icons8-linkedin-circled.svg"
                  width={32}
                  height={32}
                  alt="Linkedin Icon"
                />
              </a>
              <a href="">
                <Image
                  src="/icons8-whatsapp.svg"
                  width={32}
                  height={32}
                  alt="Whatsapp Icon"
                />
              </a>
            </nav>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default FooterComponent;
