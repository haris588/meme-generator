import React from "react";
import trollface from "./trollface.png";
import "./style.css";

function Header() {
  return (
    <>
      <header>
        <img src={trollface} alt="Troll face" />
        <h1>Meme Generator</h1>
      </header>
    </>
  );
}

export default Header;
