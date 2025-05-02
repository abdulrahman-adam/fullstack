import React from 'react';
import './Logo.css'; // Make sure the CSS file exists

function Logo() {
  return (
    <div
      className="navbar-brand"
      style={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        width: '127px',
        height: '50px',
        borderRadius: '3px',
        padding:"0px"
      }}
    >
      <span>
        <img
          src="/assets/logo/ayacodia1.png"
          alt="Ayacodia"
          width="50px"
          height="44px"
          style={{ transform: 'translateY(-1px)' }}
          className="man"
        />
      </span>
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '55px',
          transform: 'translateY(4px)',
        }}
      >
        <span style={{ color: 'black', fontSize: '15px', fontWeight: 'bold' }}>
          Ayacodia
        </span>
        <span style={{ color: 'black', fontSize: '15px' }}>université</span>
      </span>
    </div>
  );
}

export default Logo;
