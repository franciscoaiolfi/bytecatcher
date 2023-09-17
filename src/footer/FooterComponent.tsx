import React from "react";
import "../../styles/styles.css";
import TopRowContent from "./components/TopRowContent";

const FooterComponent: React.FC = () => {
  return (
    <footer>
      <div className="footer-wrapper">
       <TopRowContent/>
      </div>
    </footer>
  );
};

export default FooterComponent;
