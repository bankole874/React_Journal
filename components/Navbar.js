import React from "react";
import globeLogo from "../assets/globe.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar--logo" src={globeLogo} alt="globe icon" />
      <h1 className="navbar--title">my travel journal.</h1>
    </nav>
  );
}
