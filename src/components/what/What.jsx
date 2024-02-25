import React from "react";
import "./What.scss";

const star = "./assets/stars.png";
const avatar1 = "./assets/avatar1.png";
const avatar2 = "./assets/avatar2.png";
const avatar3 = "./assets/avatar3.png";

const What = () => {
  return (
    <div className="what">
      <div className="container">
        <div className="what_head">
          <h1>What Clients Say</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="what_cards">
          <div className="what_card">
            <img src={star} alt="star" />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="avatar">
            <img src= {avatar1} alt="consumer" />
            <div className="text_">
                <span>Wahid Ari</span>
                <p>Designer</p>
            </div>

            </div>
          </div>
          <div className="what_card">
            <img src={star} alt="star" />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="avatar">
            <img src= {avatar2} alt="consumer" />
            <div className="text_">
                <span>Wahid Ari</span>
                <p>Designer</p>
            </div>

            </div>
          </div>
          <div className="what_card">
            <img src={star} alt="star" />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="avatar">
            <img src= {avatar3} alt="consumer" />
            <div className="text_">
                <span>Wahid Ari</span>
                <p>Designer</p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
