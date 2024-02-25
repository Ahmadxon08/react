import React from "react";
const imgUrl = "/assets/logo.png";

const Dark = "./assets/dark.png";
import "./Header.scss";

const Header = () => {
  // const btnMenu = document.getElementById("toggle");

  // const btnCloseMenu = document.getElementById("btnCloseMenu");

  // btnMenu.addEventListener("click", () => {
  //   btnCloseMenu.classList.toggle("open");
  // });

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <a href="">
                <img src={imgUrl} alt="logo" />
                <span className="logo-text">Product</span>
              </a>
            </div>
            <div id="btnCloseMenu" className="nav_items">
              <ul className="nav_links">
                <li>
                  <a href="">Product </a>
                </li>
                <li>
                  <a href="">Customers</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
              </ul>
              <div className="nav_btn">
                <button>Sign In</button>
                <button className="green">Sign Up</button>
                <img onClick={() => toggle_theme()} src={Dark} alt="" />
              </div>
            </div>
            <div id="toggle" className="hambur">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
