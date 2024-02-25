import React from "react";

import "./Table.scss";

const Table = () => {
  return (
    <div className="table">
      <div className="container">
        <div className="table_head">
          <h1>Price Table</h1>
          <p>We offer competitive price</p>
        </div>
        <div className="table_cards">
          <div className="table_card">
            <h1>Free</h1>
            <p>Brief price description</p>
            <div className="price">
              <span>0</span>
              <div className="cost">
                <h2>$</h2>
                <p>Per / month</p>
              </div>
            </div>
            <div className="pi">
              <p>Only 2 Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>

            <div className="btna">
              <a href="">Order Now</a>
            </div>
          </div>
          <div className="table_card">
            <h1>Free</h1>
            <p>Brief price description</p>
            <div className="price">
              <span>5</span>
              <div className="cost">
                <h2>$</h2>
                <p>Per / month</p>
              </div>
            </div>
            <div className="pi">
              <p> 5+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>

            <div className="btna">
              <a href="">Order Now</a>
            </div>
          </div>
          <div className="table_card">
            <h1>Free</h1>
            <p>Brief price description</p>
            <div className="price">
              <span>10</span>
              <div className="cost">
                <h2>$</h2>
                <p>Per / month</p>
              </div>
            </div>
            <div className="pi">
              <p>10+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>
            </div>

            <div className="btna">
              <a href="">Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
