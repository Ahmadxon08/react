import React from "react";
const img1 = "./assets/image1.png";
const img2 = "./assets/image2.png";
const img3 = "./assets/image3.png";

import "./Step.scss";

const Step = () => {
  return (
    <div className="step">
      <div className="container">
        <div className="step_head">
          <h1>Contents Strategies</h1>
          <p>
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="step_cards">
          <div className="step_card">
            <img src={img1} alt="logo" />
            <div className="img_text">
              <p>
                By <span>Wahid Ari |</span> 03 March 2019
              </p>
              <h2>Increasing Prosperity With Positive Thinking</h2>
            </div>
          </div>
          <div className="step_card">
            <img src={img2} alt="logo" />
            <div className="img_text">
              <p>
                By <span>Wahid Ari |</span> 03 March 2019
              </p>
              <h2>Motivation Is The First Step To Success</h2>
            </div>
          </div>
          <div className="step_card">
            <img src={img3} alt="logo" />
            <div className="img_text">
              <p>
                By <span>Wahid Ari |</span> 03 March 2019
              </p>
              <h2>Success Steps For Your Personal Or Business</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
