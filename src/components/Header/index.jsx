import React from "react";
import Logo from '../../assets/graphics/monggopesen_logo.png';
import "./style.scss";

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}
