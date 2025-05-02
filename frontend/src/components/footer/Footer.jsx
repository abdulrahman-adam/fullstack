import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
return (
  <section className="footer-section" style={{marginTop:"10vh"}}>
      <div className="title">
        <Link to="/">Ayacodia</Link>
      </div>

      <div className="parent">
        <span>
          <a href="https://www.facebook.com/share/1AFtacbRhX/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </span>
        <span>
          <a href="mailto:info@ayacodia.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-envelope"></i>
          </a>
        </span>
        <span>
          <a href="https://www.twitch.tv/ayacodia" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitch"></i>
          </a>
        </span>
      </div>

      <div className="contact">
        <Link to="/contact">Contact Us</Link>
      </div>
    </section>
  );
}

export default Footer;