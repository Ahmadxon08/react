import React from "react";

const arrow = "./assets/Triangle.png";
const avicon = "./assets/amico.png";

import "./Media.scss";
const Media = () => {
  return (
    <div className="media">
      <div className="container">
        <div className="media_content">
          <div className="media_text">
            <h1>Work at the speed of thought</h1>
            <p>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="media_btn">
              <div className="btn1">
                {" "}
                <a className="" href="">
                  Get started
                </a>
              </div>

              <a className="btn2" href="">
                {" "}
                <img src={arrow} alt="link" /> <span>Watch the Video</span>{" "}
              </a>
            </div>
          </div>
          <div className="media_img">
            <img src={avicon} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
