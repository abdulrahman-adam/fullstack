import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import "./Navbar.css";
import Logo from "../logo/Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <span className="navbar-brand"><Link to="/" onClick={() => handleNavClick("/")}><span><Logo/></span></Link></span>

          {/* Desktop Links */}
          <div className="navbar-links">
            <Link to="/" onClick={() => handleNavClick("/")}>Home</Link>
            <Link to="/educations" onClick={() => handleNavClick("/educations")}>Educations</Link>
            <Link to="/forums" onClick={() => handleNavClick("/forums")}>Forums</Link>
            <Link to="/talks" onClick={() => handleNavClick("/talks")}>Talks</Link>
            <Link to="/services" onClick={() => handleNavClick("/services")}>Services</Link>
            <Link to="/contact" onClick={() => handleNavClick("/contact")}>Contact</Link>
            <div className="search-container">
              {/* <Search size={16} /> */}
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Search</button>

              
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => handleNavClick("/")}>Home</Link>
          <Link to="/educations" onClick={() => handleNavClick("/educations")}>Educations</Link>
          <Link to="/forums" onClick={() => handleNavClick("/forums")}>Forums</Link>
          <Link to="/talks" onClick={() => handleNavClick("/talks")}>Talks</Link>
          <Link to="/services" onClick={() => handleNavClick("/services")}>Services</Link>
          <Link to="/contact" onClick={() => handleNavClick("/contact")}>Contact</Link>
          <div className="search-container">
            {/* <Search size={16} /> */}
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button>Search</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
