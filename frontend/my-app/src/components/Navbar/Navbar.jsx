import React, { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Home from "../pages/Home/Home";
import Profil from "../pages/Profil/Profil";
import LogoSite from "../../assets/icons/logo.png";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    console.log("click");
  };

  return (
    <nav className="navbar">
      <NavLink to="/">FULL STACK</NavLink>
      <div className={`nav-elements  ${showNavbar && "active"}`}>
        <ul className="">
          <li>
            <NavLink className="link" to="/">
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/profil">
              Profil
            </NavLink>
          </li>

          <li>
            <NavLink className="link" to="/auth">
              Authentification
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logo" onClick={handleShowNavbar}>
        <img
          src={LogoSite}
          alt="le logo du mon projet fullstack"
          className="image"
        />
      </div>
    </nav>
  );
}
