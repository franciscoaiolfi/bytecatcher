import React from "react";
import "../../styles/styles.css";
import Image from "next/image";

const SectionOne: React.FC = () => {
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
    </section>
  );
};

export default SectionOne;
