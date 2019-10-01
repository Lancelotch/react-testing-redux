import React from "react";
import Logo from '../../assets/graphics/monggopesen_logo.png';
import "./style.scss";

export default function Header() {
  return (
    <header data-test="header">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}
