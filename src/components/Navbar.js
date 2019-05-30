import React from "react";

import logo from "../images/Logo.png";
import more from "../images/More.png";
import home from "../images/Home-color.png";

export default function Navbar() {
  return (
    <div className="App">
      <div className="row App-header">
        <div className="col">
          <img src={more} alt="more" className="setting brighter" />
        </div>
        <div className="col-6">
          <header>
            <h1 className="App-title newFont">Recipe Search</h1>
          </header>
        </div>
        <div className="col">
          <img src={logo} alt="logo" className="setting brighter" />
        </div>
      </div>
    </div>
  );
}
