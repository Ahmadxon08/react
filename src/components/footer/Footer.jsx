import React from "react";
import "./Footer.scss";
const imgFooter = "./assets/footerIM.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_content">
            <div className="footer_texts">
              <p>Join 100 Compannies who boost their business with Product</p>

              <button>Get This</button>
            </div>
            <div className="footer_img">
              <img src={imgFooter} alt="logo" />
            </div>
          
            
              
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
