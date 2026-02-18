import { useState } from 'react';
import './Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <h1>Karaikudi Bakery</h1>
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
