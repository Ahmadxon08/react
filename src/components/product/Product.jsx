import React from "react";

const icon1 = "./assets/icon1.png";
const icon2 = "./assets/icon2.png";
const icon3 = "./assets/icon3.png";
const icon4 = "./assets/icon4.png";

import "./Product.scss";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product_head">
          <h1>Product was Built Specifically for You</h1>
        </div>
        <div className="product_cards">
          <div className="card">
            <img src={icon1} alt="" />
            <h1>First click tests</h1>
            <p>While most people enjoy casino gambling,</p>
          </div>
          <div className="card">
            <img src={icon2} alt="" />
            <h1>Design surveys</h1>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </div>
          <div className="card">
            <img src={icon3} alt="" />
            <h1>Preference tests</h1>
            <p>The Myspace page defines the individual.</p>
          </div>
          <div className="card">
            <img src={icon4} alt="" />
            <h1>Five second tests</h1>
            <p>Personal choices and the overall personality of the person. </p>
          </div>
        </div>
        <div className="pro_btn">
            <a href="">SIGN UP NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Product;
